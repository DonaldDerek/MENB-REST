var mongoose = require('mongoose');

var Space = mongoose.model('Space');

exports.create = function(req, res){
    var space = new Space(req.body);

    space.save(function(err){
        if(err) console.log(err);
        else {
            console.log("New Space with id: \'" + space.id + "\' was created");
            return res.send(space);
        }
    })
};

exports.readAll = function(req, res){
    Space.find(function(err, spaces){
        if(err) console.log(err);
        else{
            console.log("Read All Spaces");
            return res.send(spaces);
        }
    })
}

exports.singleRead = function(req, res){
  var id = req.param('id');
  Space.find({_id: id}, function(err, space){
      if(err) console.log(err);
      else{
          console.log("Read Space with id: \'" + id + "\'");
          return res.send(space);
      }
  })
};

exports.update = function(req, res){
  res.send("Update Single Space " + req.param('id'));
};

exports.delete = function(req, res){
  res.send("Delete Single Space " + req.param('id'));
};
