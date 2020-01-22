'use strict';
module.exports = function(sequelize, DataTypes) {
  var Note = sequelize.define('Note', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
    content: {
      type: DataTypes.TEXT,
      validate: { notEmpty: true }
    },
    notebookId: {
      type: DataTypes.INTEGER,
      validate: { notEmpty: true }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Note;
};