import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// Not recommended to pass in index as the key for array objects
// whole React projects can be written on a single file, however each component is normally declared in their own file as an ES6-module

const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    date: '2019-05-30T17:30:31.098Z',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]



ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)

