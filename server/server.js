"use strict";
// https://expressjs.com/en/resources/middleware/cors.html
// https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');
// const Note = require('./models/note');
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
// import bodyParser from 'body-parser';
import path from 'path';
const __dirname = path.resolve('../client');
import { Note } from './models/note.js';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());
// app.use(bodyParser.json());

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

// app.listen only executes the request when all data has been loaded

app.set('view engine', 'ejs'); // TODO register view engine

app.get('/add-blog', (req, res) => {
    const note = new Note({
        title: 'new note',
        snippet: 'new snippet',
        body: 'new body'
    });

    note.save()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        });
});

app.get('/all-notes', (req, res) => {
    Note.find()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.log(error)
    });
});

app.get('/single-blog', (req, res) => {
    Note.findById('605c722ab8c4ca3f50116b9e')
    .then((data) => {
        res.send(data)
    })
    .catch((error) => {
        console.log(error)
    });
})
// app.get('/', (req, res) => {
//     // res.send('Hello World!');
//     res.sendFile(__dirname+'/public/index.html');
// });
mongoose.set('useFindAndModify', false);
