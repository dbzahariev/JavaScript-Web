const ProductApi = require('../api/product')
module.exports = {
    createGet: (req, res) => {
        res.render('product/create')
    },
    createPost: async (req, res) => {
        try {
            await ProductApi.create(req.body);
            res.redirect('/')
        } catch (err) {
            console.log(err)
            res.render('product/create', {
                error: err.message,
                fromData: {
                    category: req.category,
                    size: req.size,
                    imageUrl: req.imageUrl,
                    toppings: req.toppings
                }
            })
        }
    },
}