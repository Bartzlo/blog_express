/**
 * Function for page models. Quering widgets data from db.
*/

module.exports = function () {
  let widgetArr = []
  this.widgets.forEach(elem => {
    widgetArr.push(elem.getConcreteWidget())
  })

  return Promise.all(widgetArr)
    .then((res) => {
      for (let i = 0; i < this.widgets.length; i++) {
        this.widgets[i] = res[i]
      }

      return this
    })
}
