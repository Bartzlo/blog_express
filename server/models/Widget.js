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

  Widget.associate = (models) => {
    Widget.prototype.getConcreteWidget = function () {
      return models[this.widget_table.substr(0, 1).toUpperCase() + this.widget_table.substr(1)]
        .findOne({
          where: { id: this.concrete_widget_id }
        })
    }
  }

  return Widget
}
