import './Cart.css';
import { use, useEffect, useState } from 'react';
import CartItem from '../cart-item/CartItem';
import { CART } from '../../utils/userCart';

export default function Cart() {
    const [cartItems, setCartItems] = useState(CART);
    const [totalPrice, setTotalPrice] = useState(10000);

    function handleRedirect() {
        window.location.href = '/'
    }
        
    return (
        <div className="cart-menu">
            <div className='cart-content'>
                <div className='cart-title'>
                    <h2>Cart ({CART.length}) Items</h2>
                    <div className='close-symbol'>
                        <div className='first-line'></div>
                        <div className='second-line'></div>
                    </div>
                </div>
                <div className='line'></div>
                {cartItems.length === 0 && 
                    <div className='message'>
                        <p>Your Cart is empty</p>
                    </div>
                }
                <div className='cart-items'>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </div>
                <div className='line'></div>
                <div className='purchase'>
                    <div className='total'>
                        <span>Total: ${totalPrice}</span>
                    </div>
                    <div className='purchase-btn'>
                        <button onClick={handleRedirect}><span>Begin Purchase</span></button>
                    </div>
                </div>
      
            </div>
        </div>
    );
}