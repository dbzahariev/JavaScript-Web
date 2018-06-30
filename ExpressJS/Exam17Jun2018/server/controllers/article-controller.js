const Article = require('mongoose').model('Article')
const Edit = require('mongoose').model('Edit')

module.exports = {
    createGet: (req, res) => {
        res.render('create')
    },
    createPost: (req, res) => {
        const {
            title,
            content,
            userID
        } = req.body

        Article.create({
            title,
        }).then(article => {
            isOkArticleID = article.id;
            createEdit(article.id)
            res.redirect('/')
        }).catch(err => {
            console.log(err)
            res.render('create', {
                error: err.message,
                formData: {
                    title,
                    content,
                }
            })
        })

        function createEdit(articleID) {
            Edit.create({
                userID,
                content,
                articleID: articleID
            })
        }
    },
    showAllGet: (req, res) => {
        Article.find({}).then(articles => {
            res.render('allArticle', {
                spacer: articles.sort(function (a, b) {
                    return a.title - b.title;
                }).reverse()
            })
        })
    },
    
    showAllGet: (req, res) => {
        Article.find({}).then(articles => {
            res.render('allArticle', {
                spacer: articles.sort(function (a, b) {
                    return a.title - b.title;
                }).reverse()
            })
        })
    },
    
    showOneGet: (req, res) => {
        Article.findById(req.params.id).then(article => {
            res.render('displayArticle', {
                spacer: article,
            })
        })
    },
    editOneGet: (req, res) => {
        Article.findById(req.params.id).then(article => {
            res.render('edit', {
                spacer: article,
                id: article.id
            })
        })
    },
    editOnePost: (req, res) => {
        console.log(req.body)
        Article.findByIdAndUpdate(req, params.id, a => {

        })
    },
    historyGet: (req, res) => {
        Article.findById(req.params.id).then(article => {
            res.render('history', {
                spacer: article,
            })
        })
    }
}