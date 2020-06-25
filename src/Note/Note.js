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

const Note = () => {
    const [noteState, setNoteState] = useState({
        notes: [{text: 'Hello!'}]
    });

    const switchNote = () => {
        setNoteState({ notes: [{text: 'Changed!'}]});
    }

    return(
        <NoteDiv>
            <div>{noteState.notes[0].text}</div>
            <button className={"btn btn-warning mr-3"}>Edit</button>
            <button className={"btn btn-danger"}>Delete</button>
        </NoteDiv>
    )
}

export default Note;