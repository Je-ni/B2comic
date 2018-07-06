var mongoose = require('mongoose');

var ComicSchema = mongoose.Schema({
    name: String,
    author: String,
    description: String,
    categories: [{type: mongoose.Schema.Types.ObjectId, ref: 'Category'}],
})

module.exports = mongoose.model('Comic', ComicSchema);