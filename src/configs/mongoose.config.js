const mongoose = require('mongoose');

async function connectToMongoose(url) {
  await mongoose.connect(url, { autoIndex: true }).then(()=>{
    console.log('Connected to Database');
  }).catch((err)=>{
    console.log('Error : ' , err);
  });
}
module.exports = connectToMongoose;
