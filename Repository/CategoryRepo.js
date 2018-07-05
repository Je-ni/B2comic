var model = require('../Models/Category');
var baseRepo = require('../Repository/BaseRepo');

function categoryRepo(){
    
}

categoryRepo.prototype = baseRepo(model);

module.exports = new categoryRepo();