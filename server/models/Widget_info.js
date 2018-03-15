module.exports = function (sequelize, DataTypes) {
  const Widget_info = sequelize.define('Widget_info', { // eslint-disable-line
    info_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    slot: DataTypes.INTEGER,
    text: DataTypes.TEXT('tiny'),
    page_table: DataTypes.STRING,
    page_id: DataTypes.INTEGER
  })

  Widget_info.prototype.getItem = function (options) {
    return this['get' + this.get('page_table').substr(0, 1).toUpperCase() + this.get('page_table').substr(1)](options)
  }

  Widget_info.associate = (models) => {
    Widget_info.belongsTo(models.Category, {
      foreignKey: 'page_id',
      constraints: false,
      as: 'category'
    })

    Widget_info.belongsTo(models.Material, {
      foreignKey: 'page_id',
      constraints: false,
      as: 'material'
    })
  }

  return Widget_info // eslint-disable-line
}
