// db库
var MongoClient = require("mongodb").MongoClient

var Config = require("./config.js")

class Db {
    static getInstance() {
        if (!Db.instance) {
            Db.instance = new Db()
        }
        return Db.instance
    }

    constructor() {
        this.dbClient = ''; // 解决数据库连接问题
        this.connect();
    }

    connect() {
        let _that = this
        return new Promise((resolve, reject) => {
            if (!_that.dbClient) {
                MongoClient.connect(Config.dbURL, (err, client) => {
                    if (err) {
                        console.log(err);
                        reject(err)
                        return;
                    }
                    var db = client.db(Config.dbName)
                    _that.dbClient = db;
                    resolve(_that.dbClient)

                })
            } else {
                resolve(_that.dbClient)
            }

        })

    }

    find(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                var result = db.collection(collectionName).find(json)
                result.toArray((err, docs) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    console.log(docs)
                    resolve(docs)
                })
            })
        })

    }

    insert(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).insertOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            })
        })
    }

    update(collectionName, conJson, dataJson) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).updateOne(conJson, {
                    $set: dataJson
                }, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            })
        })
    }

    delete(collectionName, json) {
        return new Promise((resolve, reject) => {
            this.connect().then((db) => {
                db.collection(collectionName).removeOne(json, (err, result) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    resolve(result);
                })
            })
        })
    }


}

// demo
// var mydb = Db.getInstance()
// console.log(mydb)
// mydb.find("user", {}).then(function (data) {
//     console.log(data)
// })

module.exports = Db.getInstance()