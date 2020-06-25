import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import styled from 'styled-components';


const NoteDiv = styled.div`
                width: 60%;
                margin: 15px auto;
                border: 1px solid whitesmoke;
                box-shadow: 0 2px 3px lightgrey;
                padding: 16px;
                text-align: center;

                @media (min-width: 500px) {
                    {
                         width: 450px;
                     }
                }
`

const Note = (props) => {
    const [noteState, setNoteState] = useState({
        showForm: false
    });

    const switchNote = () => {
        setNoteState({showForm: !noteState.showForm});
    }

    const saveForm = () => {
        setNoteState({showForm: !noteState.showForm});
    }

    const noteForm = () => {
        return(
            <NoteDiv className={"mt-4"}>
                <h3>{props.title}</h3>
                <div className={"mb-4"}>{props.body}</div>
                <button onClick={switchNote} className={"btn btn-warning mr-3"}>Edit</button>
                <button className={"btn btn-danger"}>Delete</button>
            </NoteDiv>
    )
    }

    const editForm = () => {
        return(
            <NoteDiv className={"mt-4"}>
                <textarea rows="4" cols="50" className={"mb-4"}>Example Edit Form Text</textarea>
                <button className={"btn btn-success"} onClick={saveForm}>Save</button>
            </NoteDiv>);
    }

    let whatToShow = null;

    if( noteState.showForm ) {
        whatToShow = editForm();
    } else {
        whatToShow = noteForm();
    }

    return(
        <div className={"mt-4"}>
            {whatToShow}
        </div>
    )
}

export default Note;