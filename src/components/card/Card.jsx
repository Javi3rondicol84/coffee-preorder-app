import blackCart from '../../assets/images/black-cart.svg';
import './Card.css';

export default function Card( {id, title, description, price, img} ) {
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
                    <img src={blackCart} alt='cart-img'/>
                </div>
            </div>
        </>
    )
}