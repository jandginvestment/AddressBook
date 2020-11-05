'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var AddressBookSchema = new Schema({
  building_name: {
    type: String,
    required: 'Kindly enter the name of the Building'
  },
  apartment_number: {
    type: Number,
    required: 'Kindly enter the number of the apartment'
  },
  area_name: {
    type: String
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  emirates: {
    type: [{
      type: String,
      enum: ['Sharjah', 'Dubai', 'Abudhabi']
    }],
    default: ['Dubai']
  }
});

module.exports = mongoose.model('AddressBook', AddressBookSchema);