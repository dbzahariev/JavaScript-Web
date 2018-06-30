const Product = require('mongoose').model('Product');

const allowedToppings = ['pickle', 'tomato', 'onion', 'lettuce', 'hot sauce', 'extra sauce']

async function create(data) {
    const {
        category,
        size,
        imageUrl
    } = data

    const toppings = data.toppings
        .split(',')
        .map(e => e.trim)
        .filter(e => e.length > 0 && allowedToppings.includes(e))

    return await Product.create({
        category,
        size: Number(size),
        imageUrl,
        toppings
    })
}

function retAllData() {
    // let kk
    Product.find({})
        .then(e => {
            return e
        }).catch((err) => {
            return err
        })
    // return kk;
}



async function getAll() {
    try {
        const products = await Product.find({});

        const kk = retAllData();
        console.log(kk)
        const chicken = products.filter(e => e.category === 'chicken');
        const beef = products.filter(e => e.category === 'beef');
        const lamb = products.filter(e => e.category === 'lamb');
        return {
            chicken,
            beef,
            lamb
        }
    } catch (err) {
        console.log(err.message)
    }
}

module.exports = {
    create,
    getAll,
}