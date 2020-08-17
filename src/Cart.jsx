import React from 'react';

export default function Cart({ cart, clearCart, removeFromCart, assignQuantity }) {

    const getTotalCost = () => {
        return cart.reduce((sum, { price, quantity }) => sum + price * quantity, 0);
    }



    return (
        <React.Fragment>
            <h1>Shopping Cart</h1>
            {cart.length > 0 && (<button onClick={clearCart}>Clear Cart</button>)}
            <div className="items">
                {cart.map((desk, id) => (
                    <div className="item-description" key={id} >
                        <h3>{desk.name}</h3>
                        <img src={desk.image} alt={desk.name} />
                        <h4>${desk.price}</h4>
                        <input value={desk.quantity} onChange={(e) => assignQuantity(desk, parseInt(e.target.value))} />
                        <p>{desk.credit}</p>
                        <button onClick={() => removeFromCart(desk)}>Remove Item</button>
                    </div>
                ))
                }
            </div >

            <div>
                Total cost: ${getTotalCost()}
            </div>
        </React.Fragment >
    );
}

