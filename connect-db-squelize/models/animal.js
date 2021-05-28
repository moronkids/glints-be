'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      animal.belongsTo(models.type, {
        foreignKey: "type_id",
        as: "type"
      });
    }
  };
  animal.init({
    name: DataTypes.STRING,
    type_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'animal',
  });
  return animal;
};