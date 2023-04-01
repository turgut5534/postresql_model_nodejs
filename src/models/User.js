const { DataTypes } = require('sequelize');
const sequelize = require('../db/db')
const Post = require('./Post')

const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  
  Post.belongsTo(User);
  User.hasMany(Post);

  module.exports = User;