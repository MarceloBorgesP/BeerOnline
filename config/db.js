module.exports = {
	url : 'mongodb://marcelobp93:database123@ds039404.mongolab.com:39404/beeronline'
}

var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;

var url = 'mongodb://marcelobp93:database123@ds039404.mongolab.com:39404/beeronline';
MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  console.log("Connected correctly to server.");
  db.close();
});

// var findRestaurants = function(db, callback) {
//    var cursor =db.collection('restaurants').find( );
//    cursor.each(function(err, doc) {
//       assert.equal(err, null);
//       if (doc != null) {
//          console.dir(doc);
//       } else {
//          console.log("didnt work")
//       }
//    });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   findRestaurants(db, function() {
//       db.close();
//   });
// });


// var insertDocument = function(db, callback) {
//    db.collection('restaurants').insert( {
//       "address" : {
//          "street" : "Joao messias pereira",
//          "zipcode" : "10075",
//          "building" : "1480",
//          "coord" : [ -73.9557413, 40.7720266 ]
//       },
//       "borough" : "Manhattan",
//       "cuisine" : "Italian",
//       "grades" : [
//          {
//             "date" : new Date("2014-10-01T00:00:00Z"),
//             "grade" : "A",
//             "score" : 11
//          },
//          {
//             "date" : new Date("2014-01-16T00:00:00Z"),
//             "grade" : "B",
//             "score" : 17
//          }
//       ],
//       "name" : "Vella",
//       "restaurant_id" : "41723420"
//    }, function(err, result) {
//     assert.equal(err, null);
//     console.log("Inserted a document into the restaurants collection.");
//     callback(result);
//   });
// };

// MongoClient.connect(url, function(err, db) {
//   assert.equal(null, err);
//   insertDocument(db, function() {
//       db.close();
//   });
// });