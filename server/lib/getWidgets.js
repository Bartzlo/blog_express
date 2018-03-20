/**
 * Function for page models. Quering widgets data from db.
 * Rewriting 'model_name'.widgets array to concrete widgets
*/

module.exports = function () {
  // this.widgets is field in model where this function will be called

  let widgetArr = []
  this.widgets.forEach(elem => {
    widgetArr.push(elem.getConcreteWidget())
  })

  this.widgets = []

  return Promise.all(widgetArr)
    .then((res) => {
      for (let i = 0; i < res.length; i++) {
        if (res[i]) this.widgets.push(res[i])
      }

      return this
    })
}
