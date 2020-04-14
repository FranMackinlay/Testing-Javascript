class User {
  constructor(name, lastName, email, termsAndConditions) {
    this._name = name;
    this._lastName = lastName;
    this._email = email;
    this._termsAndConditions = termsAndConditions;
  }

  get name() {
    return this._name;
  }

  get lastName() {
    return this._lastName;
  }

  get email() {
    return this._email;
  }

  get termsAndConditions() {
    return this._termsAndConditions;
  }

};

module.exports = User;
