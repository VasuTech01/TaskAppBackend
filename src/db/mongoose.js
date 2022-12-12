const mongoose = require('mongoose');
mongoose.connect(process.env.Mongodb_URL, {
    useNewUrlParser: true,
})


