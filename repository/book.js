const bookModel = require('../model/book');

async function query(queryParams) {
    const datas = await bookModel.find({});
    return {
        total: datas.length,
        datas
    }
}

async function create(data) {
    const res = bookModel.create(data);
    return res
}

exports.query = query;
exports.create = create;