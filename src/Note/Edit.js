import React from 'react';
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

const edit = () => {

    return(
        <NoteDiv>
            <div>Note Text</div>
            <button>Edit</button>
            <button>Delete</button>
        </NoteDiv>
    )
}

export default edit;