const mongoose = require('mongoose');
const Schema = mongoose.Schema
    //ObjectId = Schema.ObjectId;

const userSchema = new Schema({
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
// useSchema.id instanceof mongoose.Types.ObjectId;
const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;