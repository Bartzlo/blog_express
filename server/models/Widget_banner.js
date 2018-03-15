module.exports = function (sequelize, DataTypes) {
  const Widget_banner = sequelize.define('Widget_banner', { // eslint-disable-line
    banner_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    slot: DataTypes.INTEGER,
    url: DataTypes.STRING,
    text: DataTypes.TEXT('tiny'),
    img_id: DataTypes.INTEGER,
    page_table: DataTypes.STRING,
    page_id: DataTypes.INTEGER
  })

  Widget_banner.prototype.getItem = function (options) {
    return this['get' + this.get('page_table').substr(0, 1).toUpperCase() + this.get('page_table').substr(1)](options)
  }

  Widget_banner.associate = (models) => {
    Widget_banner.belongsTo(models.Img, {foreignKey: 'img_id'})
  }

  return Widget_banner // eslint-disable-line
}
