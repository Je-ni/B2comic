var model = require('../Models/Subscriber');
var baseRepo = require('../Repository/BaseRepo');

function subscriberRepo(){
    
}

subscriberRepo.prototype = baseRepo(model);

module.exports = new subscriberRepo();