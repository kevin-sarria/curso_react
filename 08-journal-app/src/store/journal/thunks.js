import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes } from './';
import { loadNotes } from '../../helpers';


export const startNewNote = () => {

    return async( dispatch, getState ) => {

        // Todo: tarea dispatch
        dispatch( savingNewNote() );

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        const setDocResp = await setDoc( newDoc, newNote );

        newNote.id = newDoc.id;


        // Dispatch( newNote )
        dispatch( addNewEmptyNote( newNote ) );


        // Dispatch( activarNote )
        dispatch( setActiveNote( newNote ) );

    }

}

export const startLoadingNotes = () => {

    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if( !uid ) throw new Error('Hubo un problema.');

        const notes = await loadNotes( uid );

        dispatch( setNotes(notes) );

    }

}



