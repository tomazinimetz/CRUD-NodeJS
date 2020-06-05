"use strict";
const DataTypes = require("sequelize/lib/data-types");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("book", {
      id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
      name: { type: DataTypes.STRING(200), allowNull: false },
      publish_date: { type: DataTypes.DATE, allowNull: false },
      number_pages: DataTypes.INTEGER,
      style: DataTypes.STRING(50),
      author_id: {
        type: DataTypes.UUID,
        references: { model: "author", key: "id" },
      },
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("book");
  },
};