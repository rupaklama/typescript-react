import React from 'react';
import Func from './Func';

// One of the basic ways, we work with Components in Typescript is 
// to create an 'interface' the describes the different 'props' 
// that we are going to pass into the component. 

// Interfaces are basically a way to describe data shapes, for example - an object
// which creates a 'new Custom type', describing the property names and value types of an object. 
// Interface is the 'Custom Type' that we will define as structure of our props

// The goal here is to create an 'interface' that's going to 
// describe all the different 'props' we expect to pass into our App component. 
interface AppProps { // structure of our props
  // '?' rite next to key to make it optional property
  // so we can show our App either with or without - color prop
  color?: string; 
}

// interface to describe 'S' - State object
interface AppState {
  counter: number;
}

// In TypeScript, Generics are basically a kind of tool that enables us 
// to create reusable code components that work with many types instead of a single type. 

// Whenever we make use of React.Component, we can specify the structure of props
// by passing in as a 'generic' as the first argument - <P stands for Props
// NOTE: here React.Component - Component is a Generic Class
class App extends React.Component<AppProps, AppState> { // reference to interface next to React.Component here
  
  // component level state
  // state property method
  // NOTE: Use this method to define App State to prevent using additional interfaces
  state = { counter: 0 }; 

  // using constructor instead for state
  // using AppProps as Type Annotation
  // constructor(props: AppProps) {
  //   super(props);
  
  //   this.state = { counter: 0 }
  // }

  onIncrement = (): void => {
    this.setState({ counter: this.state.counter + 1 })
  }

  onDecrement = (): void  => {
    this.setState({ counter: this.state.counter - 1 })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        {this.props.color}
        {this.state.counter}
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>

        <Func color='red' />
      </div>
    );
  }
}
// NOTE: THIS PATTERN ABOVE IS GOING TO BE REPEATED FOR ALL CLASS BASED COMPONENTS

export default App;
