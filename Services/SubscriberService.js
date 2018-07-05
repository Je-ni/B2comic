var repo = require('../Repository/SubscriberRepo');
var categoryRepo = require('../Repository/CategoryRepo');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'b2comicscrum@gmail.com',
        pass: 'genesystechhub'
    }
});

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

exports.addSubscriber = function(req, res, data, preferences){
    repo.add(data, function(err, subscriber){
        if(err) res.json({err: err, message: "Something went wrong, please try again"});
        else{
            exports.sendMail(req, res, data.email);

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
    // var array = preferences.split(',');
    console.log(preferences);
};  

exports.getAllSubscribers = function(req, res){
    repo.get({}, '-__v', {path: 'preferences', select:'-__v'},'', function(err, Subscribers){
        if(err) res.json({err: err, message: 'Something went wrong'});
        res.json(Subscribers);
    });
}

exports.sendMail = function(req, res, subscriber){
    // setup email data with unicode symbols
    var mailOptions = {
        from: 'b2comicscrum@gmail.com', // sender address
        to: subscriber, // list of receivers
        subject: 'Hello ✔', // Subject line
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(err){
        if (err) {
           console.log(err);
        }
        else{
            console.log('sent code');
        }
    });
}








// exports.getUsersByParam = function(req, res, options){
//     repo.get(options, '-password', {path: 'posts', select:'-__v'},{path: 'friends', select:'name'},function(err, users){
//         if(err) res.json({err: err, message: 'Something went wrong'});
//         res.json(users);
//     });
// }

// exports.deleteUser = function(req, res, options){
//     repo.delete(options, function(err){
//         if(err) res.json({err: err, message: 'The user could not be deleted'});
//         res.json({message: 'The user was deleted successfully'});
//     });
// }

// exports.updateUser = function(req, res, id, options){
//     repo.update(id, options, function(err){
//         if(err) res.json({err: err, message: `The user could not be updated`});
//         res.json({message: update});
//     });
// }

// //for adding friends who are users
// exports.addUserAsFriend = function(res, res, user_id, friend_id){
//     repo.getById(user_id, function(err, user){
//         user.friends.push(friend_id);
//         user.save();
//         repo.getById(friend_id, function(err, friend){
//             friend.friends.push(user_id);
//             friend.save();
//             if(err) res.json({err: err, message: 'the friend could not be added'});
//             res.json({message: 'You just added a new friend'});
//         });
//     });
// }