const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/softwereproject', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});