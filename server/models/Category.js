module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Category', {
    category_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    title: DataTypes.STRING,
    discription: DataTypes.TEXT,
    content: DataTypes.TEXT,
    header_img_id: DataTypes.INTEGER,
    previwe_img_id: DataTypes.INTEGER
  })

  Category.associate = (models) => {
    Category.belongsTo(models.Img, {as: 'header_img', foreignKey: 'header_img_id'})
    Category.belongsTo(models.Img, {as: 'previwe_img', foreignKey: 'previwe_img_id'})

    Category.hasMany(models.Widget, {
      as: 'widgets',
      foreignKey: 'page_id',
      constraints: false,
      scope: {
        page_table: 'category'
      }
    })

    Category.hasMany(models.Material, {
      as: 'materials',
      foreignKey: 'category_id'
    })

    Category.prototype.getWidgets = require('../lib/getWidgets')
  }

  return Category
}
