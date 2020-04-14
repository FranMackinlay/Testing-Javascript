class Cars {
  constructor(model, cv) {
    this._model = model;
    this._cv = cv;
  }

  get model() {
    return this._model;
  }

  get cv() {
    return this._cv;
  }
};

module.exports = Cars;
