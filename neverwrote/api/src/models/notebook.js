'use strict';
module.exports = function(sequelize, DataTypes) {
  var Notebook = sequelize.define('Notebook', {
    title: {
      type: DataTypes.STRING,
      validate: { notEmpty: true }
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Notebook;
};