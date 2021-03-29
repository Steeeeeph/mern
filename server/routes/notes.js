import express from 'express';
import { getNotes, createNote } from '../controllers/notes.js';
// , getNote, createNote, updateNote, likeNote, deleteNote 
const router = express.Router();

router.get('/', getNotes);
router.post('/', createNote);
// router.get('/:id', getNote);
// router.patch('/:id', updateNote);
// router.delete('/:id', deleteNote);
// router.patch('/:id/likeNote', likeNote);

export default router;