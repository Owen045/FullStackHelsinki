import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


// Not recommended to pass in index as the key for array objects
// whole React projects can be written on a single file, however each component is normally declared in their own file as an ES6-module




ReactDOM.render(
  <App />,
  document.getElementById('root')
)

