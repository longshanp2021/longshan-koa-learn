const studentModel = require("../model/student")

async function query(queryParam) {
    const datas = await studentModel.find({});
    return {
        total: datas.length,
        datas
    };
}

async function create(data) {
    const res = await studentModel.create(data);
    return res;
}

async function remove(id) {
    const res = await studentModel.remove({
        _id: id
    });
}


exports.query = query;
exports.create = create;
exports.remove = remove;