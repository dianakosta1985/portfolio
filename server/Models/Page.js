const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db/database");

class Page extends Model {}

Page.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    subTitle: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT("long"),
    },
  },
  {
    sequelize,
    modelName: "Page",
    tableName: "pages",
  }
);

module.exports = Page;
