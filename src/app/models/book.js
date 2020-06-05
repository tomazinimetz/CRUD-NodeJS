const { uuid } = require("uuidv4");

module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    "book",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: DataTypes.STRING(200),
      publish_date: DataTypes.DATE,
      number_pages: DataTypes.INTEGER,
      style: DataTypes.STRING(50),
      author_id: DataTypes.UUID,
    },
    {
      freezeTableName: true,
    }
  );

  Book.beforeCreate((book) => (book.id = uuid()));

  Book.associate = (models) => {
    Book.belongsTo(models.author, { foreignKey: "id" });
  };

  return Book;
};
