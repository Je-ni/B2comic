var repo = require('../Repository/ComicRepo');
var categoryRepo = require('../Repository/CategoryRepo');
var bodyParser = require('body-parser');

exports.addComic = function(req, res, data, categories){
    repo.add(data, function(err, comic){
        if(err) res.json({err: err, message: "Something went wrong, please try again"});
        else{
            categories.forEach(element => {
                repo.getById(comic._id, function(err, comic){
                    comic.categories.push(element);
                    comic.save();
                })         
                categoryRepo.getById(element, function(err, category){
                    category.comics.push(comic._id);
                    category.save();
                });
            });

            res.json({sub: comic, message: 'You added comic successfully'});
        }
    });
};  

exports.getAllComics = function(req, res){
    repo.get({}, '-__v', {path: 'categories', select:'category'},'', function(err, comics){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(comics);
    });
}

exports.getComicsByParam = function(req, res, options){
    repo.get(options, '-__v', {path: 'categories', select:'category'},'',function(err, comics){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(comics);
    });
}

exports.deleteComic = function(req, res, options){
    repo.delete(options, function(err){
        if(err) res.json({err: err, message: 'The comic could not be deleted'});
        res.json({message: 'The comic was deleted successfully'});
    });
}

// exports.updateUser = function(req, res, id, options){
//     repo.update(id, options, function(err){
//         if(err) res.json({err: err, message: `The user could not be updated`});
//         res.json({message: update});
//     });
// }
