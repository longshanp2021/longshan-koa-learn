const teacherModel = require("../model/teacher")

async function query(queryParam) {
    const datas = await teacherModel.find({});
    return {
        total: datas.length,
        datas
    };
}

async function create(data) {
    const res = await teacherModel.create(data);
    return res;
}

async function remove(id) {
    const res = await teacherModel.remove({
        _id: id
    });
}


exports.query = query;
exports.create = create;
exports.remove = remove;