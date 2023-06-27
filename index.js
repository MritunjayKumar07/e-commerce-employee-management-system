import express from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import Routers from './routes/route.js';
import Router2 from './routes/route2.js';
import Router3 from './routes/router3.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const PORT = 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json({limit: "500mb", extended: true}))
// app.use(express.urlencoded({limit: "500mb", extended: true, parameterLimit: 50000}))
app.use(cors());

app.use('/', Routers);
app.use('/pay', Router2);
app.use('/login', Router3);
Connection();

app.listen(PORT,()=>console.log(`Server Running on PORT no ${PORT}...`));