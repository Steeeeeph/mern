import React from 'react';
import { useSelector } from 'react-redux';
import Note from './Note/Note';
import useStyles from './styles';

const Notes = () => {
    const notes = useSelector((state) => state.notes)
    const classes = useStyles();
    console.log(notes);
    return (
        <div>
            <h1>NOTES</h1>
            <Note />
            <Note />
        </div>
    );
}

export default Notes;