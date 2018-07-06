var service = require('../Services/SubscriberService');

exports.addSubscriber = function(req, res){
    var data = {
        email: req.body.email,
        name: req.body.name   
    };
    var preferences = req.body.categories; //returns an array of categories

    return service.addSubscriber(req, res, data, preferences);
}

exports.getSubscribers = function(req, res){
    return service.getAllSubscribers(req, res);
}

exports.sendMail = function(req, res){
    return service.sendMail(req, res);
}

exports.deleteSubscriber = function(req, res){
    var option = {email: req.params.email};
    return service.deleteSubscriber(req, res, option);
}

// exports.getUserByParam = function(req, res){
//     var option = req.query;
//     return service.getUsersByParam(req, res, option);
// }

// exports.updateUser = function(req, res){
//     var id = req.params.id;
//     var update = req.body;
//     return service.updateUser(req, res, id, update);    
// }

// exports.addFriend = function(req, res){
//     var user_id = req.query.user_id;
//     var friend_id = req.query.friend_id;
//     return service.addUserAsFriend(res, res, user_id, friend_id);
// }