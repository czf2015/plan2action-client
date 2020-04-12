import Datastore from 'nedb/browser-version/out/nedb.js';

export default class {
    /**
     * Links: https://github.com/louischatriot/nedb#creatingloading-a-database
     * @param {Object} options: { filename, inMemoryOnly = false, timestampData = false, autoload = false, onload, afterSerialization, beforeDeserialization, corruptAlertThreshold = 0.1, compareStrings }
     */
    constructor(options) {
        this.db = new Datastore(options);
        // this.createIndexes()
    }

    ensureIndex(options) {
        return new Promise((resolve, reject) => {
            this.db.ensureIndex(options, (err) => {
                if (err) return reject(err);
                return resolve();
            });
        });
    }

    /**
     * @param {Object | Array} docs
     * @return {Object | Array}
     */
    insert(docs) {
        return new Promise((resolve, reject) => {
            this.db.insert(docs, (err, newDocs) => {
                if (err) return reject(err);
                return resolve(newDocs);
            });
        });
    }

    find(queries, sortOpt = {
        issueDateTimeInt: -1,
    }, pageSize = 30, pageNum = 1) {
        console.log('find查询前:', new Date().getTime());
        return new Promise((resolve, reject) => {
            this.db.find(queries).sort(sortOpt).skip((pageNum - 1) * pageSize).limit(pageSize)
                .exec((err, docs) => {
                    if (err) return reject(err);
                    console.log('find查询后:', new Date().getTime());
                    return resolve(docs);
                });
        });
    }

    findAll(queries, sortOpt = {
        issueDateTimeInt: -1,
    }) {
        console.log('findAll查询前:', new Date().getTime());
        return new Promise((resolve, reject) => {
            this.db.find(queries).sort(sortOpt).exec((err, docs) => {
                if (err) return reject(err);
                console.log('findAll查询后:', new Date().getTime());
                return resolve(docs);
            });
        });
    }

    findOne(queries) {
        return new Promise((resolve, reject) => {
            this.db.findOne(queries, (err, doc) => {
                if (err) return reject(err);
                return resolve(doc);
            });
        });
    }

    update(queries, doc) {
        return new Promise((resolve, reject) => {
            this.db.update(queries, doc, {}, (err) => {
                if (err) return reject(err);
                return resolve();
            });
        });
    }

    remove(queries) {
        return new Promise((resolve, reject) => {
            this.db.remove(queries, {
                multi: true,
            }, (err, numRemoved) => {
                if (err) return reject(err);
                return resolve(numRemoved);
            });
        });
    }

    count(queries) {
        return new Promise((resolve, reject) => {
            this.db.count(queries, (err, count) => {
                if (err) return reject(err);
                return resolve(count);
            });
        });
    }

    async createIndexes() {
        return Promise.all([
            this.ensureIndex({
                fieldName: 'docId',
                unique: true,
            }),
            this.ensureIndex({
                fieldName: 'issueDateTimeInt',
            }),
        ]);
    }

    async save(docs, ifUpdate = true) {
        console.log('入库前:', new Date().getTime());
        const duplicateDocs = [];
        for (const doc of docs) {
            try {
                await this.insert(doc);
            } catch (err) {
                // console.log(err)
                // console.log(err.key)
                // console.log(err.message)
                // console.log(err.errorType)
                // console.log(JSON.stringify(err, null, 2))
                duplicateDocs.push(doc);
            }
        }
        console.log('入库后1:', new Date().getTime());
        console.log(`${docs.length}篇稿件入库, 其中有${duplicateDocs.length}篇重复`);
        if (duplicateDocs.length === 0 && ifUpdate) return docs.length - duplicateDocs.length;
        for (const duplicateDoc of duplicateDocs) {
            try {
                await this.update({
                    docId: duplicateDoc.docId,
                }, duplicateDoc);
            } catch (err) {
                console.log(err.message);
                return Promise.reject(err);
            }
        }
        console.log('入库后2:', new Date().getTime());
        console.log(`${docs.length}篇稿件入库, 其中有${duplicateDocs.length}篇重复`);
        return docs.length;
    }
}
