import * as api from '../api';

//action creators
const getNotes = () => async (dispatch) => {
    try {
        const {data} = await api.fetchNotes();
        dispatch({ type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
const createNote = (note) => async (dispatch) => {
    try {
        const {data} = await api.createNote(note);
        dispatch({ type: 'CREATE', payload: data})
    } catch (error) {
        console.log(error.message);
    }
}
export { getNotes, createNote };