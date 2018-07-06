var repo = require('../Repository/ComicRepo');
var categoryRepo = require('../Repository/CategoryRepo');
var bodyParser = require('body-parser');

// exports.addSubscriber = function(req, res, data, preferences){
//     repo.add(data, function(err, subscriber){
//         var array = data.preferences.split(',');
//         console.log(array);
//         array.forEach(element => {            
//             categoryRepo.getById(element, function(err, category){
//                 category.subscribers.push(subscriber._id);
//                 category.save();
//                 if(err) res.json({err: err, message: "Something went wrong, please try again"});
//             });
//         });
//         // exports.sendMail(req, res, data.email);
//         res.json({sub: subscriber, message: 'You subscribed successfully'});
//     });
// };       

exports.addComic = function(req, res, data, preferences){
    repo.add(data, function(err, comic){
        if(err) res.json({err: err, message: "Something went wrong, please try again"});
        else{
            preferences.forEach(element => {
                repo.getById(subscriber._id, function(err, subscriber){
                    subscriber.preferences.push(element);
                    subscriber.save();
                })         
                categoryRepo.getById(element, function(err, category){
                    category.subscribers.push(subscriber._id);
                    category.save();
                });
            });

            res.json({sub: subscriber, message: 'You subscribed successfully'});
        }
    });
};  

exports.getAllComics = function(req, res){
    repo.get({}, '-__v', {path: 'Categories', select:'category'},'', function(err, comics){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(comics);
    });
}

exports.getComicsByParam = function(req, res, options){
    repo.get(options, '-__v', {path: 'Categories', select:'category'},'',function(err, comics){
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
