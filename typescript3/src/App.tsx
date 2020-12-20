import './App.css';
import Cart from './components/Cart';
import Pizza from './components/Pizza';
import pizzas from './data/pizza.json';

function App(): JSX.Element {
  return (
    <div>
      <ul>{pizzas.map((pizza)=> ( <Pizza key={pizza.id} pizza={pizza} /> ))}</ul>
      <hr />
      <Cart />
    </div>
  );
}

export default App;
