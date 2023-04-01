const { DataTypes } = require('sequelize');
const sequelize = require('../db/db')
const User = require('./User')

const Post = sequelize.define('Post', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });


  module.exports = Post;