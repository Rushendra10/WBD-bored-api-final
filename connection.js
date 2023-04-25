const { connect } = require('mongoose');

const uri = "mongodb+srv://rushendra:rambabu15@cluster0.dvd0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoref = connect(uri, { useNewUrlParser: true, useUnifiedTopology: true}); 

exports.mongoref=mongoref;

exports.uri=uri;
