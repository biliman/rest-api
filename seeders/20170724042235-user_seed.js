'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: 'John',
      password: 'Doe',
      email: 'john@doe.com',
      role: 'staff',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Steve',
      password: 'Jobs',
      email: 'steve@jobs.com',
      role: 'staff',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Fickry',
      password: 'Bil Iman',
      email: 'fickry@biliman.com',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
