const mongoose = require('mongoose');

const conn = mongoose.connect("mongodb+srv://varshanthgowdaml:varsh%40567@cluster1v.lmz5b2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1v", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log('Database Connected');
    return db;
}).catch(err => {
    console.error('Connection Error: ', err);
});

module.exports = conn;
