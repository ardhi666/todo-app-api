'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todolist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      todolist.belongsTo(models.activity,{
        as:"activity",
        foreignKey:{
          name:"id"
        }
      })
    }
  }
  todolist.init({
    title: DataTypes.STRING,
    activity_group_id: DataTypes.INTEGER,
    is_active: DataTypes.STRING,
    priority: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todolist',
  });
  return todolist;
};