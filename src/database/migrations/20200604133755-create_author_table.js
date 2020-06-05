"use strict";

const DataTypes = require("sequelize/lib/data-types");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("author", {
      id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      age: DataTypes.INTEGER,
      birthday: DataTypes.DATE,
      deathday: DataTypes.DATE,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("author");
  },
};
