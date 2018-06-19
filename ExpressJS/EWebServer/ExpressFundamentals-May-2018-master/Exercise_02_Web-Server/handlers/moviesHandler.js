const movies = require('../config/dataBase');
const templates = require('../config/templates');

module.exports = (req, res) => {
    let pathname = req.urlData.pathname;
    if (pathname === '/movies/all' && req.method === 'GET') {
        var postersHtml = movies
            .map((m, index) => templates.posterTemplate(index, m.moviePoster))
            .join("");
        res.view('views/viewAll.html', postersHtml);
    } else if (pathname === '/movies/add' && req.method === 'GET') {
        res.view('views/addMovie.html');
    } else if (pathname === '/movies/add' && req.method === 'POST') {
        req.on('end', () => {
            var data = req.bodyData;
            if (!data.movieTitle || !data.moviePoster) {
                res.view('views/addMovie.html', templates.errorNotification());
                return;
            }

            movies.push(data);
            res.view('views/addMovie.html', templates.successNotification());
        })
    } else if (pathname.startsWith('/movies/details/') && req.method === 'GET') {
        var index = parseInt(pathname.substr(pathname.lastIndexOf('/') + 1))
        let movie = movies[index];

        var detailsHtml = templates.detailsTemplate(
            movie.moviePoster, 
            movie.movieTitle, 
            movie.movieYear, 
            movie.movieDescription);

        res.view('views/details.html', detailsHtml);
    } else {
        return true;
    }
}