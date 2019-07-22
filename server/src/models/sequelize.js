// Database config
const db = require('../../configs/db');

// Sequelize instance
const Sequelize = require('sequelize');
const sequelize = new Sequelize(db.connection);

// Model structure
const CommentsModel = require('./comments_model');

// Create Model for Comments
const Comments = CommentsModel(sequelize, Sequelize);

// Sync all models that aren't already in the database
sequelize.sync()

sequelize.sync()
    .then(() => {
        console.log('Database & tables created!');
    })

module.exports = Comments;