const { uuid } = require("uuidv4");

module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    "author",
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      name: DataTypes.STRING(100),
      age: DataTypes.INTEGER,
      birthday: DataTypes.DATE,
      deathday: DataTypes.DATE,
    },
    {
      freezeTableName: true,
    }
  );

  Author.beforeCreate((author) => {
    author.id = uuid();
  });

  Author.associate = (models) => {
    Author.hasMany(
      models.book,
      { as: "book", foreignKey: "author_id" },
      { onDelete: "cascade" }
    );
  };

  return Author;
};
