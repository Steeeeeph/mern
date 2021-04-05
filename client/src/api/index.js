import axios from 'axios';

const url = "http://localhost:3000/notes";

export const fetchNotes = () => axios.get(url);
export const createNote = (newNote) => axios.post(url, newNote)