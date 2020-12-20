// pizza object structure
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

// interface to describe props structure
interface Props {
  pizza: Pizza;
}

// React.FC stands for React Functional Component
// component<P={}, S> - P is first arg, meaning Props which is empty object by default
//  & S is second arg, meaning State
// passing above Props interface as a first argument - P
const Pizzas: React.FC<Props> = ({ pizza }): JSX.Element => {
  return (
    <li>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>{pizza.price}</p>
    </li>
  )
}

export default Pizzas
