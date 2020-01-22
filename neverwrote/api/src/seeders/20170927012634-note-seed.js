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
    const note = [
      {
          title: 'A silly post',
          content: 'Roses are red, violets are blue, I am a poet.',
          createdAt: new Date('2010/08/17 12:09'),
          updatedAt: new Date('2010/08/17 12:09'),
          notebookId: 1
        },
        {
          title: 'New technology',
          content: 'These things called "computers" are fancy.',
          createdAt: new Date('2011/03/06 15:32'),
          updatedAt: new Date('2011/03/06 15:47'),
          notebookId: 2
        },
        {
          title: 'Like A Magic',
          content: 'HI',
          createdAt: new Date('2011/03/06 15:32'),
          updatedAt: new Date('2011/03/06 15:47'),
          notebookId: 2
        }

      ];
      // Insert posts into the database
      return queryInterface.bulkInsert('Notes', note, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Notes', null, {});
  }
};
