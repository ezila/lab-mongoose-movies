const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity.js');

const dbName = 'lab-mongoose-movies';
mongoose.connect(`mongodb://localhost/${dbName}`).catch(err => console.error(err));

const celebrities = [
  {
    name: 'Tom Cruise',
    occupation: 'Actor',
    catchPhrase: 'Lorem ipsum dolor sit amet'
  },
  {
    name: 'Beyonce',
    occupation: 'Singer',
    catchPhrase: 'Lorem ipsum dolor sit amet'
  },
  {
    name: 'Daffy Duck',
    occupation: 'Comedian',
    catchPhrase: 'Lorem ipsum dolor sit amet'
  }
];

Celebrity.create(celebrities).then(function (celebrities) {
  console.log(`Created ${celebrities.length} celebrities`);
    
  // Once created, close the DB connection
  mongoose.connection.close();
}).catch(err => console.error(err));