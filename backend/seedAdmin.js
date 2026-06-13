require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("./models/user.model");

async function seedAdmin() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");

    // check if admin exists
    const existing = await User.findOne({ email: process.env.ADMIN_EMAIL });

    if (existing) {
      console.log("⚠️ Admin already exists");
      process.exit();
    }

    // hash password
    const hashed = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);

    // create admin
    await User.create({
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      phone: "9999999999",
      password: hashed,
      address: "Admin Address",
      role: "admin"
    });

    console.log("✅ Admin created successfully");
    process.exit();

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedAdmin();