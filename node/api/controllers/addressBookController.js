'use strict';


var mongoose = require('mongoose'),
  Address = mongoose.model('AddressBook');

exports.list_all_address = function(req, res) {
    Address.find({}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};




exports.create_an_address = function(req, res) {
  var new_address = new Address(req.body);
  new_address.save(function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.read_an_address = function(req, res) {
  Address.findById(req.params.Id, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.update_a_address = function(req, res) {
    Address.findOneAndUpdate({_id: req.params.Id}, req.body, {new: true}, function(err, address) {
    if (err)
      res.send(err);
    res.json(address);
  });
};


exports.delete_a_address = function(req, res) {


  Address.remove({
    _id: req.params.Id
  }, function(err, address) {
    if (err)
      res.send(err);
    res.json({ message: 'Address successfully deleted' });
  });
};