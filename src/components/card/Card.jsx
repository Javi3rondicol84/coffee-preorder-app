import { useState } from 'react';
import blackCart from '../../assets/images/black-cart.svg';
import selectedCart from '../../assets/images/selectedCart.svg';
import './Card.css';

export default function Card( {id, title, description, price, img} ) {
    const [selected, setSelected] = useState(false);

    function handleSelected() {
        if(!selected) {
            setSelected(true);
        }
        else {
            setSelected(false);
        }
    }

    return (
        <>
            <div className='card'>
                <div className='card-img'>
                    <img src={img} alt="img-card" />
                </div>
                <div className='card-title'>
                    <h3>{title}</h3>
                </div>
                <div className='card-price'>
                    <span>${price}</span>
                </div>
                <div className='cart-img'>
                    <div>
                        <button onClick={handleSelected}><img src={selected ? selectedCart : blackCart} alt='cart-img'/></button>
                    </div>
                </div>
                 <div className='added'> {selected && <span>Añadido al carrito!</span>}</div>
            </div>
        </>
    )
}