const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://Shibam9064:Shibam9064@cluster0.yctg4cl.mongodb.net/?retryWrites=true&w=majority';

const noticeRouter = require('./routes/voteRouts');


const app = express();

// app.use(logger('common', {
//     stream: fs.createWriteStream('./server.log', { flags: 'a' })
// }));
// app.use(logger('dev'));


app.use(express.json({ limit: '1000mb' }));
app.use(cors());
app.get('/', (req, res) => {
    res.statusCode = 200;
    res.send('VOTING APP BACKEND SHIBAM');
});

app.use('/data/',
    noticeRouter,
);


app.listen(process.env.PORT || 8000, () => {
    //Connect to MongoDB
    mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Mongo DB connected successfully!");
        }
    });
    console.log(`Listening at port ${process.env.PORT || 8000}`);
});