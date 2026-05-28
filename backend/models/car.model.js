const mongoose = require('mongoose');

const carschema = new mongoose.Schema({
    name : {type: String , required : true},
    type: {type: String , enum: ['Hatchback', 'Sedan', 'SUV']},
    Fuel : {type:String , enum : ['Petrol','Diesel','Electric']},
    transmission : {type:String , enum:['Automatic','Manual']},
    seats: {type:Number},
    priceperday :{type:Number , required : true},
    location : {type:String},
    rating: {type:Number , default: 0},
    images:[{type:String}],
    regNumber:{type:String},
    status:{type:String , enum : ['Available','Booked'] , default:'Available'},
},{timestamps:true});

module.exports = mongoose.model('Car',carschema);