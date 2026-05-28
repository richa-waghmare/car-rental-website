const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
exports.register = async(req, res , next) =>{
    try{
     const {name,email,password,phone,address} = req.body;
     const hashed = await bcrypt.hash(password,10);
     const user = await User.create({name,email,password:hashed,phone,address});
     res.status(201).json({token: generateToken(user._id,user.role),user});

    }
    catch(err) {
       console.error("ERROR 👉", err); // 👈 EXACT ERROR
    res.status(500).json({ message: err.message });
    }
};

exports.login = async(req, res , next) =>{
    try{
     const {email,password} = req.body;
     const user = await User.findOne({email});
    if(!user || !(await bcrypt.compare(password,user.password)))
    return res.status(401).json({message:"Invalid credentials"});
    res.json({token : generateToken(user._id,user.role),user});
    }
    catch(err) {
        next(err);
    }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 🔥 generate reset token (NOT JWT)
    const token = crypto.randomBytes(32).toString("hex");

    // 🔐 hash token (best practice)
    const hashedToken = crypto
      .createHash("sha256")
      .update(token)
      .digest("hex");

    user.resetToken = hashedToken;
    user.resetTokenExpire = Date.now() + 10 * 60 * 1000; // 10 min

    await user.save();

    // 🔥 reset link
    const resetLink = `http://localhost:3000/reset-password/${token}`;

    // 📧 mail setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
      }
    });

    // 📧 send mail
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: user.email,
      subject: "Password Reset",
      html: `
        <h3>Password Reset Request</h3>
        <p>Click below link to reset your password:</p>
        <a href="${resetLink}">${resetLink}</a>
        <p>This link will expire in 10 minutes</p>
      `
    });

    res.json({
      message: "Password reset link sent to your email"
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  
};

exports.resetPassword = async (req, res) => {
  try {
    const { password } = req.body;

    // 🔥 ADD THIS
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetToken: hashedToken,
      resetTokenExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ message: "Invalid or expired token" });
    }

    const hashed = await bcrypt.hash(password, 10);

    user.password = hashed;
    user.resetToken = undefined;
    user.resetTokenExpire = undefined;

    await user.save();

    res.json({ message: "Password reset successful" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};