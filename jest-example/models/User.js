class User {
  constructor(name, lastName, email, termsAndConditions, dni) {
    this._name = name;
    this._lastName = lastName;
    this._email = email;
    this._termsAndConditions = termsAndConditions;
    this._dni = dni;
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

  get dni() {
    return this._dni;
  }

};

module.exports = User;
