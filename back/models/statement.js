'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Statement.init({
    fio: DataTypes.TEXT,
    birthday: DataTypes.TEXT,
    spo: DataTypes.TEXT,
    specialization: DataTypes.TEXT,
    phone: DataTypes.TEXT,
    home_phone: DataTypes.TEXT,
    school: DataTypes.TEXT,
    certificate: DataTypes.TEXT,
    isParent: DataTypes.BOOLEAN,
    certificate_scan: DataTypes.BLOB,
    education_form: DataTypes.TEXT,
    email: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Statement',
  });
  return Statement;
};