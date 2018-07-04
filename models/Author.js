//Author Model for our User 
// =============================================================

module.exports = function (sequelize, DataTypes) {

  var Author = sequelize.define("Author", {
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    username: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  });
  Author.associate = function (models) {
    Author.hasMany(models.Post, {
      onDelete: "cascade"
    });
  };

  return Author;
};

