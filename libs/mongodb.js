const MongoClient = require("mongodb").MongoClient;
const uri = "mongodb+srv://H2:" + process.env.dbPass + "@maincluster-fygih.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = {
    connect() {
        client.connect(err => {
            if (err) {
                this.close();
            }
        });
        return this;
    },
    close() {
        client.close();
    },
    findOne(db, collection, query, callback) {
        client.db(db).collection(collection).findOne(query, (err, document) => callback);
    },
    findAll(db, collection, callback) {
        client.db(db).collection(collection).find({}).sort({name: 1}).toArray((err, documents) => { callback(err, documents); });
    }
}