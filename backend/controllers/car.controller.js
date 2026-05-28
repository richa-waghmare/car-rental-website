const Car = require('../models/car.model');

exports.getAllCars  = async (req, res, next) => {
  try {
    const { fuel, transmission, type, minPrice, maxPrice } = req.query;
    const filter = {};
    if (fuel)         filter.fuel = fuel;
    if (transmission) filter.transmission = transmission;
    if (type)         filter.type = type;
    if (minPrice || maxPrice) filter.priceperday = { $gte: minPrice || 0, $lte: maxPrice || 99999 };
    const cars = await Car.find(filter);
    res.json(cars);
  } catch (err) { next(err); }
};

exports.getCarById  = async (req, res, next) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) return res.status(404).json({ message: 'Car not found' });
    res.json(car);
  } catch (err) { next(err); }
};

exports.createCar = async (req, res, next) => {

  try {

    const images = req.files.map(
      file => file.path
    );

    const car = await Car.create({

      ...req.body,

      images

    });

    res.status(201).json(car);

  } catch (err) {

    next(err);

  }
};

exports.updateCar  = async (req, res, next) => {
  try {
    const car = await Car.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(car);
  } catch (err) { next(err); }
};

exports.deleteCar  = async (req, res, next) => {
  try {
    await Car.findByIdAndDelete(req.params.id);
    res.json({ message: 'Car deleted' });
  } catch (err) { next(err); }
};