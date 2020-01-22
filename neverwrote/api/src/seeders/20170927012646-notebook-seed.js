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
const notebook = [
      {
          title: 'book1',

          createdAt: new Date('2009/08/17 12:09'),
          updatedAt: new Date('2010/08/17 12:09')
        },
        {
          title: 'book2',

          createdAt: new Date('2009/03/06 15:32'),
          updatedAt: new Date('2011/03/06 15:47')
        }
      ];
      // Insert posts into the database
      return queryInterface.bulkInsert('Notebooks', notebook, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Notebooks', null, {});
  }
};
