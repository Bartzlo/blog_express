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
      // quering widget data from one of the table, where table name equal
      // to 'widget_table' call in widget table
      let modelName = this.widget_table.substr(0, 1).toUpperCase() + this.widget_table.substr(1)
      return models[modelName]
        .findOne({
          where: { id: this.concrete_widget_id },
          include: { all: true, nested: true }
        })
        .then(result => {
          // adding view field to widget data object
          if (result) {
            result.view = this.widget_table
            return result
          } else {
            console.error('Widget not found. widget_table: ' + this.widget_table + ', concrete_widget_id: ' + this.concrete_widget_id)
            return null
          }
        })
    }
  }

  return Widget
}
