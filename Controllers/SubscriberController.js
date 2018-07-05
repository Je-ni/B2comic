var service = require('../Services/SubscriberService');

exports.addSubscriber = function(req, res){
    var data = {
        preferences: req.body.categories,
        email: req.body.email   
    };
    return service.addSubscriber(req, res, data);
}

exports.getSubscribers = function(req, res){
    return service.getAllSubscribers(req, res);
}

exports.sendMail = function(req, res){
    return service.sendMail(req, res);
}
// exports.deleteUser = function(req, res){
//     var option = {_id: req.params.id};
//     return service.deleteUser(req, res, option);
// }

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