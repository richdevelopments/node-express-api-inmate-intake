const mongoose = require('mongoose');  
const Schema = mongoose.Schema;  
// Defines collection and schema for Inmate  
let Inmate = new Schema({  
  InmateName: {  
    type: String  
  },  
  InmateDateOfBirth: {  
    type: String  
  },    
  InmateCellNumber: {  
    type: Number  
  },  
  InmateIntakeDateTime: {  
    type: String  
  },
  InmateLocation: {  
    type: String  
  }  
},{  
    collection: 'Inmate'  
});  
module.exports = mongoose.model('Inmate', Inmate);  