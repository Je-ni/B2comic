var mongoose = require('mongoose');

var SubscriberSchema = mongoose.Schema({
    name: String,
    email: {type: String, unique: true},
    preferences: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
})

module.exports = mongoose.model('Subscriber', SubscriberSchema);