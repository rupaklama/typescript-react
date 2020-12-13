import React from 'react'

// The goal here is to create an 'interface' that's going to 
// describe all the different 'props' we expect to pass into our App component. 
interface AppProps { // structure of our props
  // '?' rite next to key to make it optional property
  // so we can show our App either with or without - color prop
  color?: string; 
}


// functional component 
// NOTE: Bad practice to rely on Type Inference with function component
// instead use Type Annotation to return value
const App = (props: AppProps): JSX.Element => { // returning jsx
  return (
    <div>
      {props.color}
    </div>
  )
}

export default App
