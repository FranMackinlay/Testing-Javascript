const UserService = require('../services/UserService');
const User = require('../models/User');

describe('Bateria', () => {
  let userService;

  beforeAll(() => {
    userService = new UserService();
  });

  afterAll(() => {
    userService = null;
  });


  test('Creacion de un usuario', async () => {
    const user = new User('Francisco', 'Mackinlay', 'franmackinlay@gmail.com', true);

    const userCreated = await userService.create(user);

    expect(userCreated.name).toBe('Francisco');
    expect(userCreated.lastName).toBe('Mackinlay');
    expect(userCreated.email).toBe('franmackinlay@gmail.com');
    expect(userCreated.termsAndConditions).toBe(true);

    const findUser = await userService.find('franmackinlay@gmail.com');

    expect(findUser).not.toBeUndefined();
    expect(findUser.length).toBe(1);

  });

  describe('Bateria 2', () => {
    let userService;

    beforeAll(async () => {
      userService = new UserService();
      const user1 = new User('Foo', 'Bar', 'foobar@quiz.com', true);
      const user2 = new User('Bar', 'Foo', 'barfoo@quiz.com', false);
      const user3 = new User('Foobarr', 'Quiz', 'quizfoobar@quiz.com', true);

      await userService.create(user1);
      await userService.create(user2);
      await userService.create(user3);
    });

    afterAll(() => {
      userService = null;
    });

    test('Test 3Users FindOne', async () => {
      const findUser = await userService.find('quizfoobar@quiz.com');
      expect(findUser).not.toBeUndefined();
      expect(findUser.length).toBe(1);
    });

    test('Test remove user', async () => {
      await userService.remove('quizfoobar@quiz.com');
      const removedUser = await userService.find('quizfoobar@quiz.com');

      expect(removedUser.length).toBe(0);

    });
  });
});
