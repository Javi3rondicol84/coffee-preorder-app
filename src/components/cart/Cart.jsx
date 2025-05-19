import './Cart.css';
import { useState } from 'react';
import CartItem from '../cart-item/CartItem';

export default function Cart() {
    const [cartItems, setCartItems] = useState([1]);

    
    return (
        <div className="cart-menu">
            <div className='cart-content'>
                <div className='cart-title'>
                    <h2>Cart (0) Items</h2>
                    <div className='close-symbol'>
                        <div className='first-line'></div>
                        <div className='second-line'></div>
                    </div>
                </div>
                {cartItems.length === 0 && 
                    <div className='message'>
                        <p>Your Cart is empty</p>
                    </div>
                }
                <div className='cart-items'>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </div>
    );
}