const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect(
  "mongodb://localhost:27017/TodoApp",
  (err, client) => {
    if (err) {
      return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDB server");
    const db = client.db("TodoApp");
    // db.collection("Todos")
    //   .find({ _id: ObjectID("5bc7709c37835f71229aa0de") })
    //   .toArray()
    //   .then(docs =>
    //     console.log(`Todos: \n${JSON.stringify(docs, undefined, 2)}`)
    //   )
    //   .catch(err => console.log(`Unable to fetch todos: ${err}`));

    // db.collection("Todos")
    //   .find()
    //   .count()
    //   .then(count =>
    //     console.log(`Todos: \n${JSON.stringify(count, undefined, 2)}`)
    //   )
    //   .catch(err => console.log(`Unable to fetch todos: ${err}`));

    db.collection("Users")
      .find({ location: "Norfolk" })
      .toArray()
      .then(docs =>
        console.log(`Users: \n${JSON.stringify(docs, undefined, 2)}`)
      )
      .catch(err => console.log(`Unable to fetch users: \n${err}`));

    client.close();
  }
);

//if "finding" by `_id`, must use Mongo's ObjectID() method, as the `_id` isn't actually a string, but a type of ObjectID
