import React from 'react'
import Note from './components/Note'

const App = ({notes}) => {


    const rows = () => notes.map(note => 
      
          <Note key={note.id} note={note}/>
      ) // use map function to apply <li> tag to each note in notes array
                                                              // best to apply a unqiue key attribute to each child in array
  
    return (
      <div>
        <h1>Notes</h1>
        <ul>
          {rows()} 
        </ul>
      </div>
    )
  }

  export default App