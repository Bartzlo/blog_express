db.Category.findOne({
  include: [
    {model: db.Img, as: 'header_img'},
    {model: db.Img, as: 'previwe_img'},
    {model: db.Widget, as: 'widgets'},
    {
      model: db.Material,
      as: 'materials',
      include: [
        {model: db.Img}
      ]}
  ]
})
  .then((result) => {
    return result && result.getWidgets()
  })
  .then((result) => {
    // result cotains all needed data
  })
