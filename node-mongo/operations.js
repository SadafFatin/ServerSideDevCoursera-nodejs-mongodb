const assert = require('assert');

exports.insertDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insert(document);

};

exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
    return coll.updateOne(document , {$set:update }, null);
};


exports.testCallBack = (x, y, callback) => {
    callback(x + y, 'result from test callback');
}


/*

(err, result) => {
        assert.equal(err, null);
        console.log("Inserted " + result.result.n +" documents into the collection " + collection);
*/