var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    category: {type: String, unique: true},
    comics: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comic'}],
    subscribers: [{type: mongoose.Schema.Types.ObjectId, ref: 'Subscriber'}],
})

module.exports = mongoose.model('Category', CategorySchema);