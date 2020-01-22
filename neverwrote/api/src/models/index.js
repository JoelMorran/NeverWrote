const Sequelize = require('sequelize');

// Load our database configuration
const dbConfig = require('../config/database');

// Connect Sequelize to the database
const sequelize = new Sequelize(dbConfig.database, dbConfig.user,
  dbConfig.password, dbConfig);

// Load all of our model definitions
const models = {
  /* *** TODO: Import your models here *** */
  // eg. `Note: sequelize.import(require.resolve('./note'))` if you have a model in models/note.js
  Note: sequelize.import(require.resolve('./note')),
  Notebook: sequelize.import(require.resolve('./notebook'))
};

/* *** TODO: Set up Sequelize associations here *** */

// Store the database connection (used in tests)
models.database = sequelize;

// Export our model definitions
models.Notebook.hasMany(models.Note, {
  foreignKey: 'notebookId'
});
models.Note.belongsTo(models.Notebook, {
  foreignKey: 'notebookId'
});

module.exports = models;

/*
 docker-compose run --rm api sequelize model:create --name notebook \
--attributes title:string

 docker-compose run --rm api sequelize model:create --name note \
--attributes title:string,content:text,notebookId:integer

docker-compose run --rm api sequelize seed:create \
--name note-seed
docker-compose run --rm api sequelize seed:create \
--name notebook-seed
*/
