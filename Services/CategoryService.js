var repo = require('../Repository/CategoryRepo');
var subscriberRepo = require('../Repository/SubscriberRepo');

exports.addCategory = function(req, res, data){
    repo.add(data, function(err, Category){
        if(err) res.json({err: err, message: "Something went wrong, please try again"});
        res.json({message: 'Category added successfully'});
    });   
}

exports.getAllCategories = function(req, res){
    repo.get({}, '','', {path: 'subscribers', select: '-__v'}, function(err, Categories){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(Categories);
    });
}









