import './CartItem.css';
import DeleteItemImg from '../../assets/images/delete-item-cart.svg';
import { useState } from 'react';

export default function CartItem({item}) {
    
    const [amount, setAmount] = useState(0);

    function handleIncrementAmount() {
        setAmount((prevAmount) => prevAmount + 1);
    }

    function handleDecrementAmount() {
        if(amount > 0) {
            setAmount((prevAmount) => prevAmount - 1);
        }
    }

    return (
        <>
            <div className="cart-item">
                <div className='img'>
                    <img src={item.img} alt='item img'/>
                </div>
                <div className='item-info'>
                    <div className='title'>
                        <p>{item.title}</p>
                    </div>
                    <div className='modify-item'>
                        <div className='choose-amount'>
                            <button onClick={handleDecrementAmount}><span>-</span></button>
                            <span>{amount}</span>
                            <button onClick={handleIncrementAmount}><span>+</span></button>
                        </div>
                        <div className='price'>
                            <span>${item.price}</span>
                        </div>
                        <div className='delete'>
                            <button>
                                <img src={DeleteItemImg} alt='delete item img'/>
                            </button> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}