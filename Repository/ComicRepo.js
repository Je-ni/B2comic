var model = require('../Models/Comic');
var baseRepo = require('../Repository/BaseRepo');

function comicRepo(){
    
}

comicRepo.prototype = baseRepo(model);

module.exports = new comicRepo();