import React, { useState } from 'react';

import './App.css';

import Desks from './Desks';

import Cart from './Cart';

const purchaseDesks = 'desks';
const purchaseCart = 'cart';

function App() {

  const [cart, setCart] = useState([]);

  const [purchase, setPurchase] = useState('desks')




  const addToCart = (desk) => {
    setCart([...cart, { ...desk }]);
  }

  const removeFromCart = (deskToBeRemoved) => {
    setCart(cart.filter((desk) => desk !== deskToBeRemoved));
  }

  const goToCart = (purchaseSection) => {
    setPurchase(purchaseSection);
  }


  return (
    <div className='App'>
      <header>
        <button onClick={() => goToCart(purchaseCart)}>View Cart {cart.length}</button>
        <button onClick={() => goToCart(purchaseDesks)}>View Desks </button>
      </header>
      {purchase === purchaseDesks && <Desks addToCart={addToCart} />}
      {purchase === purchaseCart && <Cart cart={cart} removeFromCart={removeFromCart} />}

      <footer>
        <p></p>
      </footer>
    </div>
  )
}

export default App;