const formidable = require('formidable')
const Tag = require('mongoose').model('Tag')

module.exports = (req, res) => {
  if (req.pathname === '/generateTag' && req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
      const name = fields.tagName
      Tag.create({name,images: []})
      // res.writeHead(200, {
      //   'content-type': 'text/plain'
      // })
      // res.write('recived upload:\n\n')
      // res.end(util.inspect({
      //   fields: fields,
      //   files: files
      // }))
    })
  } else {
    return true
  }
}