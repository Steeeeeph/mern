// https://expressjs.com/en/resources/middleware/cors.html
// https://medium.com/@beaucarnes/learn-the-mern-stack-by-building-an-exercise-tracker-mern-tutorial-59c13c1237a1
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
const __dirname = path.resolve('../client');
// import note from '../models/note';

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(cors());

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB Server"))
  .catch((error) => console.log(`${error} did not connect`));

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
/*
app.post('/', (req, res) => {
  const {title, body, author} = req.body;
                                
  let newNote = new note({
    title,
    author,
    body
  });

  newNote
  .save()
  .then((note)=> {
    console.log("Note saved");
    res.json(note);
  })
  .catch(error => {
    console.log("Error saving the note.");
    res.send("Error");
  });
});
*/
app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.sendFile(__dirname+'/public/index.html');
});
mongoose.set('useFindAndModify', false);
