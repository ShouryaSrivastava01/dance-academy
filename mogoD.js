//CRUD Create, read, update and delete
// Command on mongo 

use myKart    //create/switch to myKart

db.item.insertOne({name: "A4 sheet", price:"1", qyt:"400"})

db.item.find() // show objects 
db.item.insertMany([{name:"Cookie", price:"10", qyt:"500"}, {name:"Cold drink", price:"80", qyt:"50"}, {name:"Chips", price:"10", qyt:"900"}])

show collections //show all the collections in a database

db.item.find(query) // filter accordingly to query

db.item.find({qyt: {$gte: "700"}}) //gte: greater than equal

// AND operator is used using comma
db.item.find({qyt: {$gte: "300"}, price: {$gte: "10"}})

//OR query
db.item.find({$or:[{qyt: {$gte: "600"}}, {price: {$gte: "60"}}]})

//projection
db.item.find({qyt: {$gte: "700"}}, {"name": 1},{"qyt": 2})  

//delete document in mongo database
db.item.deleteOne({price: "10"}) //delete the first object with required query

db.item.deleteMany({price:"80"}) //delte all the documents with the required query
db.item.deleteMany({qyt: {$gte: "400"}, price: {$gte: "10"}})

//update
db.item.updateOne({name:"Cold drink"}, {$set:{price:"90"}})

db.item.updateMany({name:"Cold drink"}, {$set:{price:"90",qyt:"980"}})