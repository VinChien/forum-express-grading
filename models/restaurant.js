'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Restaurant extends Model {
    static associate (models) {
      Restaurant.belongsTo(models.Category, { foreignKey: 'categoryId' })
      Restaurant.hasMany(models.Comment, { foreignKey: 'restaurantId' })
    }
  };
  Restaurant.init(
    {
      name: DataTypes.STRING,
      tel: DataTypes.STRING,
      address: DataTypes.STRING,
      openingHours: DataTypes.STRING,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
      viewCount: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Restaurant',
      tableName: 'Restaurants', // 新增這裡
      underscored: true
    }
  )
  return Restaurant
}
