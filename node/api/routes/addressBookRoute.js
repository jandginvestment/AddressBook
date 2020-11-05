'use strict';
module.exports = function(app) {
  var addressBook = require('../controllers/addressBookController');

  // addressBook Routes
  app.route('/addressBook')
    .get(addressBook.list_all_address)
    .post(addressBook.create_an_address);


  app.route('/addressBook/:Id')
    .get(addressBook.read_an_address)
    .put(addressBook.update_a_address)
    .delete(addressBook.delete_a_address);
};