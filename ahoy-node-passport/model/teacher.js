const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const teacherSchema = new Schema({
    id: Number,
    name: String,
    lastname: String,
    username: {
        type: String,
        // ห้ามซ้ำ
        unique: true
    },
    password: String
}, { versionKey: false });
// userSchema.id instanceof mongoose.Types.ObjectId;
const TeacherModel = mongoose.model('Teacher', teacherSchema);
module.exports = TeacherModel;