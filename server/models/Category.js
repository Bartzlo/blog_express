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
    Category.belongsTo(models.Img, {foreignKey: 'header_img_id'})
    Category.belongsTo(models.Img, {foreignKey: 'previwe_img_id'})

    Category.hasMany(models.Banner, {
      foreignKey: 'page_id',
      constraints: false,
      scope: {
        table: 'category'
      }
    })
  }

  return Category
}
