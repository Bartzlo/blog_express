module.exports = function (sequelize, DataTypes) {
  const Info = sequelize.define('Info', {
    info_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    slot: DataTypes.INTEGER,
    text: DataTypes.TEXT('tiny'),
  })

  Info.prototype.getItem = function (options) {
    return this['get' + this.get('page_table').substr(0, 1).toUpperCase() + this.get('page_table').substr(1)](options)
  }

  Info.associate = (models) => {
    Info.hasMany(models.Widget, {
      foreignKey: 'concrete_widget_id',
      constraints: false,
      scope: {
        widget_table: 'info'
      }
    })
  }

  return Info
}
