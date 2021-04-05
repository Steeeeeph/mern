import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createNote } from '../../actions/notes';

const Form = () => {
    const [noteData, setNoteData] = useState({
        creator: '',
        title:'',
        message:'',
        tags:'',
        selectedFile:''
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createNote(noteData));
    }
    const clear = () => {

    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a note</Typography>
                <TextField 
                    name="title"
                    variant="outlined"
                    label="Title"
                    fullWidth value={noteData.title}
                    onChange={(event) => setNoteData({ ...noteData, title: event.target.value })}/>
                <TextField 
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth value={noteData.message}
                    onChange={(event) => setNoteData({ ...noteData, message: event.target.value })}/>
                <TextField 
                    name="tags"
                    variant="outlined"
                    label="Tags"
                    fullWidth value={noteData.tags}
                    onChange={(event) => setNoteData({ ...noteData, tags: event.target.value })}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64}) => setNoteData({ ...noteData, selectedFile: base64 })}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Add</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    );
}

export default Form;