const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const staffSchema = new Schema({
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
// userSchemaid instanceof mongoose.Types.ObjectId;
const StaffModel = mongoose.model('Staff', staffSchema);
module.exports = StaffModel;