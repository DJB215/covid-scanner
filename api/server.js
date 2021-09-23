const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const sql = require('mssql');

const app = express();

var config = {
    user: 'admin',
    password: 'EHNInnovation01',
    server: 'database-1.cofja2nbqc7n.us-east-1.rds.amazonaws.com',
    database: 'covid-tracker',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true
    },
    port: 1433
}

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/covid", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to DB"))
    .catch(console.error);

const Covid = require('./models/Covid');

app.get('/allCovid', async (req, res) => {
    const tests = await Covid.find();
    res.json(tests);
})

app.post('/covid/new', async (req, res) => {
    // var postData = req.body;
    // console.log("Request body: ", req.body)
    // let pool = await sql.connect(config);
    // await pool.request().query('INSERT INTO TrackingTable SET ?', postData, (error, results, fields) => {
    //     if (error) throw error;
    //     res.end(JSON.stringify(results));
    // });
    const test = new Covid({
        EinsteinID: req.body.userId,
        CovidTestCode: req.body.testId,
        TestResult: req.body.testResult
    })
    console.log(req)
    test.save();
    res.json(test)
});



app.listen(5000, () => console.log("Server started on port 5000"))
