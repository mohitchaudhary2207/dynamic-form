var mongoose = require('mongoose');
var formdataSchema = new mongoose.Schema({
    Name: String,
    lastName: String,
    Email: String,
    Phone: Number,
    Address: String,
    Password: String,
    City: String,
    Car: String,
    Destination: String,
    roundtrip: String,
},{ collection : 'formdata' });

var formdataSchemas = new mongoose.model('formdata', formdataSchema);


module.exports = {
	formdataSchema:formdataSchemas
}


