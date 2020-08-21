const mongoose = require('mongoose');

// ES6 Promises
mongoose.Promise = global.Promise;

// Connext to the db before tests run
before(function(done){
  // Connect to mongodb
  mongoose.connect('mongodb://localhost/mariochar',  { useNewUrlParser: true , useUnifiedTopology: true });

  // Listen to one event once
  mongoose.connection.once('open',function(){
    console.log('Connection has been made, now make fireworks...');
    done();
  }).on('error', function(error){
    console.log('Connection error: ',error);
  });
});

// Drop the characters collection befor each tests
beforeEach(function(done){
  //Drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
})
