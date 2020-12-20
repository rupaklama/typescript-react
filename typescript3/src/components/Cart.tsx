import { Component } from 'react';

// props structure
interface Props {}

// state structure
interface State {
  // flag to show/hide cart
  isOpen: boolean;
}

class Cart extends Component<Props, State> {
  state = { isOpen: false };

  // There are two types of event properties - e.target & e.currentTarget
  // e.target is the element in which the event occurs - <span> here
  // e.currentTarget is the element where the event handler is attached to - <button> here
  handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    // console.log(e.target);
    // console.log(e.currentTarget);
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          <span>2 pizzas</span>
        </button>

        <div style={{ display: this.state.isOpen ? 'block' : 'none' }}>
          <ul>
            <li>Napoletana</li>
            <li>Marinara</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
