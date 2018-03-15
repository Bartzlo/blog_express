module.exports = function (sequelize, DataTypes) {
  const Widget = sequelize.define('Widget', {
    widget_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    page_table: DataTypes.STRING,
    page_id: DataTypes.INTEGER,
    widget_table: DataTypes.STRING,
    concrete_widget_id: DataTypes.INTEGER
  })

  Widget.prototype.getItem = function (options) {
    return this['get' + this.get('page_table').substr(0, 1).toUpperCase() + this.get('page_table').substr(1)](options)
  }

  Widget.associate = (models) => {
    Widget.belongsTo(models.Category, {
      foreignKey: 'page_id',
      constraints: false,
      as: 'category'
    })

    Widget.belongsTo(models.Material, {
      foreignKey: 'page_id',
      constraints: false,
      as: 'material'
    })

    Widget.belongsTo(models.Banner, {
      foreignKey: 'concrete_widget_id',
      constraints: false,
      as: 'banner'
    })

    Widget.belongsTo(models.Banner, {
      foreignKey: 'concrete_widget_id',
      constraints: false,
      as: 'info'
    })
  }

  return Widget
}
