class CarService {
  constructor() {
    this._cars = [];
  }

  create(car) {
    this._cars.push(car);
    return car;
  }

  find(model) {
    const car = this._cars.filter(car => car.model === model);
    return car;
  }

  remove(model) {
    return this._cars.splice(
      this._cars.findIndex((car) => car.model === model), 1)
  }
}

module.exports = CarService;
