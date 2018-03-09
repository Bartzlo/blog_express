module.exports = function (sequelize, DataTypes) {
  const Material = sequelize.define('Material', {
    material_id: {
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
    img_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  })

  Material.associate = (models) => {
    Material.belongsTo(models.Img, {foreignKey: 'img_id'})
    Material.belongsTo(models.Category, {foreignKey: 'category_id'})
    Material.belongsTo(models.User, {foreignKey: 'user_id', as: 'author'})

    Material.hasMany(models.Banner, {
      foreignKey: 'page_id',
      constraints: false,
      scope: {
        table: 'material'
      }
    })
  }

  return Material
}
