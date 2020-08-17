import React from 'react';

export default function Cart({ cart, removeFromCart }) {
    return (
        <React.Fragment>
            <h1>Shopping Cart</h1>
            <button>Clear Cart</button>
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
}

