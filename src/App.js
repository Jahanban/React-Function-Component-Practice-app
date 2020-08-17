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
    let newCart = [...cart];
    let productInCart = cart.find((product) => desk.name === product.name);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      productInCart = {
        ...desk,
        quantity: 1,
      }
      newCart.push(productInCart);
    }
    setCart(newCart);
  }

  const removeFromCart = (deskToBeRemoved) => {
    setCart(cart.filter((desk) => desk !== deskToBeRemoved));
  }

  const goToCart = (purchaseSection) => {
    setPurchase(purchaseSection);
  }

  const clearCart = () => {
    setCart([])
  }

  const numOfItemsInCart = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0)
  }

  const assignQuantity = (desk, amount) => {
    const newCart = [...cart];
    newCart.find(item => item.name === desk.name).quantity = amount;
    setCart(newCart);
  }


  return (
    <div className='App'>
      <header>
        <button onClick={() => goToCart(purchaseCart)}>View Cart {numOfItemsInCart()}</button>
        <button onClick={() => goToCart(purchaseDesks)}>View Desks </button>
      </header>
      {purchase === purchaseDesks && <Desks addToCart={addToCart} />}
      {purchase === purchaseCart && <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} assignQuantity={assignQuantity} />}

      <footer>
        <p></p>
      </footer>
    </div>
  )
}

export default App;