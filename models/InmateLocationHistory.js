const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Defines collection and schema for InmateLocationHistory  
let InmateLocationHistory = new Schema({
  InmateName: {  
    type: String  
  },  
  InmateLocation: {  
    type: String  
  }  
},{  
    collection: 'InmateLocationHistory'  
});  
module.exports = mongoose.model('InmateLocationHistory', InmateLocationHistory);