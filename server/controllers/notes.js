import NoteModel from '../models/note.js';

const getNotes = async (req, res) => {
    try {
        const notes = await NoteModel.find();
        console.log(notes);
        res.status(200).json(notes);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}
const createNote = (req, res) => {
    const note = req.body;
    const newNote = new NoteModel(note);

    try {
        await newNote.save();
        res.status(201).json(newNote);

    } catch (error) {
        res.status(409).json({message: error.message})

    }
    res.send('Post creation');
}
export { getNotes, createNote };