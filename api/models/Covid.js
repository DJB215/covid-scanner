const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CovidSchema = new Schema({
    EinsteinID: {
        type: String,
        required: true
    },
    JeffersonID: {
        type: String,
        //default: ''
    },
    CovidTestCode: {
        type: String,
        //default: ''
    },
    TestResult: {
        type: String,
        //default: ''
    },
    TestDate: {
        type: String,
        //default: Date.now()
    }
})

const Covid = mongoose.model("covid", CovidSchema);

module.exports = Covid;