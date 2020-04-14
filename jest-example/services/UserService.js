class UserService {
  constructor() {
    this._users = [];
  }

  find(email) {
    const users = this._users.filter(user => user.email === email);

    return this.asyncFunction(users);
  }

  findAll() {
    return this.asyncFunction(this._users);
  }

  findOne(email) {
    const user = this._users.find(user => user.email === email);
    return this.asyncFunction(user);
  }

  create(user) {
    this._users.push(user);
    return this.asyncFunction(user);
  }

  remove(email) {
    return this.asyncFunction(
      this._users.splice(
        this._users.findIndex((user) => user.email === email),
        1)
    );
  }

  asyncFunction(val) {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve(val);
      }, 1000)
    })
  }

}

module.exports = UserService;
