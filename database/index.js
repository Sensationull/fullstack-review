const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher',{ useNewUrlParser: true });


mongoose.connection.once('open', function (){
 console.log('connection success')
}).on('error', function(error){
 console.log('Connection error: ',error)
})

let repoSchema = new mongoose.Schema({
  iD: Number, 
  userID: Number,
  userName: String,
  repoName: String,
  forkCount: Number,
  uRL: String
});

let Repo = mongoose.model('Repo', repoSchema);

// I don't think I need to save the find function because it's a mongo native function?

let save = (model) => {
  model.save()
  .then(doc => {
    console.log(doc);
  })
  .catch(err => {
    console.log(err);
  });
  console.log(model, ' was saved to MongoDB'); // I'm telling it to log, but I'm not sure if I need to.
}

var test = new Repo({
  iD: 1,
  userID: 123,
  userName: 'test',
  repoName: 'repotest',
  forkCount: 13,
  uRL: 'abc123.com'
});

console.log('this is a ', test);
test.save(test);

module.exports.save = save;