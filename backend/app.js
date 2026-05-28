const express = require ('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db.js');
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(
  "/public",
  express.static("public")
);
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/cars',     require('./routes/car.routes'));
app.use('/api/users',    require('./routes/user.routes'));
// app.use('/api/bookings', require('./routes/booking.routes'));

app.use(errorHandler);

app.listen(process.env.PORT || 5000, () =>{
console.log(`server running on port ${process.env.PORT || 5000}`);
});