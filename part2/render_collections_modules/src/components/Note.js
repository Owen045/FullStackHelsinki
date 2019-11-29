import React from 'react' // all reacts scripts must contain this

const Note = ({note}) => {
    return (
        <li>{note.content}</li>
    )
}


export default Note // this allows Note to be imported by other files