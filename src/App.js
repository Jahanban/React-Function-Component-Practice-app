import React, { useState } from 'react';

import './App.css';

const purchaseDesks = 'desks';
const purchaseCart = 'cart';

function App() {

  const [cart, setCart] = useState([]);

  const [purchase, setPurchase] = useState('desks')

  const [desks] = useState([
    {
      name: 'Oak Desk',
      price: '$299',
      image: "https://firebasestorage.googleapis.com/v0/b/juno-project-five-730f7.appspot.com/o/desk10.jpg?alt=media&token=92621847-ff11-4fb7-a31b-bf370ac2653b"
    },
    {
      name: 'Sit Stand Desk',
      price: '$599',
      image: "https://firebasestorage.googleapis.com/v0/b/juno-project-five-730f7.appspot.com/o/desk3.jpg?alt=media&token=46d95984-c5c3-4e2f-8092-983e1cd95425"
    },
    {
      name: 'Sit Stand Desk',
      price: '$599',
      image: "https://firebasestorage.googleapis.com/v0/b/juno-project-five-730f7.appspot.com/o/desk2.jpg?alt=media&token=2d00eeb3-5dec-45f4-bcca-60ccb8efea05"
    },
    {
      name: 'Sit Stand Desk',
      price: '$599',
      image: "https://firebasestorage.googleapis.com/v0/b/juno-project-five-730f7.appspot.com/o/desk4.jpg?alt=media&token=82e630d8-e683-4229-8fbe-70c73b7ff41b"
    },
    {
      name: 'Sit Stand Desk',
      price: '$599',
      image: "https://firebasestorage.googleapis.com/v0/b/juno-project-five-730f7.appspot.com/o/desk5.jpg?alt=media&token=d55c73da-668a-4d3e-aa3c-30665b46c967"
    },
    {
      name: 'Sit Stand Desk',
      price: '$599',
      image: "https://firebasestorage.googleapis.com/v0/b/juno-project-five-730f7.appspot.com/o/desk6.jpg?alt=media&token=d081b4c4-09e2-47e3-b7ff-380175007025"
    }
  ]);


  const addToCart = (desk) => {
    setCart([...cart, { ...desk }]);
  }

  const removeFromCart = (deskToBeRemoved) => {
    setCart(cart.filter((desk) => desk !== deskToBeRemoved));
  }

  const goToCart = (purchaseSection) => {
    setPurchase(purchaseSection);
  }

  const renderDesks = () => (
    <React.Fragment>
      <h1>Products</h1>
      <div className="items">
        {desks.map((desk, id) => (
          <div className="item-description" key={id}>
            <h3>{desk.name}</h3>
            <img src={desk.image} alt={desk.name} />
            <h4>{desk.price}</h4>
            <p>{desk.credit}</p>
            <button onClick={() => addToCart(desk)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );

  const renderCart = () => (
    <React.Fragment>
      <h1>Shopping Cart</h1>
      <div className="items">
        {cart.map((desk, id) => (
          <div className="item-description" key={id}>
            <h3>{desk.name}</h3>
            <img src={desk.image} alt={desk.name} />
            <h4>{desk.price}</h4>
            <p>{desk.credit}</p>
            <button onClick={() => removeFromCart(desk)}>Remove Item</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );


  return (
    <div className='App'>
      <header>
        <button onClick={() => goToCart(purchaseCart)}>View Cart {cart.length}</button>
        <button onClick={() => goToCart(purchaseDesks)}>View Desks </button>
      </header>
      {purchase === purchaseDesks && renderDesks()}
      {purchase === purchaseCart && renderCart()}

      <footer>
        <p></p>
      </footer>
    </div>
  )
}

export default App;