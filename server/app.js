const express = require('express');
const mongoose = require('mongoose');
const app = express();
const questionRouter = require('./routes/questionRoutes');
const testRouter = require('./routes/testRoutes');
const fieldRouter = require('./routes/fieldRoutes');
const userRouter = require('./routes/userRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const Urls = require('./settings/staticUrls');

mongoose.connect(Urls.dbUrl);
const connection = mongoose.connection;
connection.once('open', () => console.log('database connected successfully'));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/questions', questionRouter);
app.use('/api/tests', testRouter);
app.use('/api/fields', fieldRouter);
app.use('/api/users', userRouter);

app.listen(Urls.serverPort, () =>
  console.log(`server is running at ${Urls.serverDomain}:${Urls.serverPort}`)
);
