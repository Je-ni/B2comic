var service = require('../Services/ComicService');

exports.addComic = function(req, res){
    var data = {
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,  
    };
    var categories = req.body.categories; //returns an array of categories

    return service.addComic(req, res, data, categories);
}

exports.getComics = function(req, res){
    return service.getAllComics(req, res);
}

exports.deleteComic = function(req, res){
    var option = {_id: req.body.id};
    return service.deleteComic(req, res, option);
}

exports.getComicByParam = function(req, res){
    var option = req.query;
    return service.getComicsByParam(req, res, option);
}
