import './CartItem.css';
import ItemImg from '../../assets/images/cardimggeneric.jpg';
import DeleteItemImg from '../../assets/images/delete-item-cart.svg';

export default function CartItem() {

    return (
        <>
            <div className="cart-item">
                <div className='img'>
                    <img src={ItemImg} alt='item img'/>
                </div>
                <div className='item-info'>
                    <div className='title'>
                        <p>Cafe super cabrales | 500gr</p>
                    </div>
                    <div className='modify-item'>
                        <div className='choose-amount'>
                            <button><span>-</span></button>
                            <span>1</span>
                            <button><span>+</span></button>
                        </div>
                        <div className='price'>
                            <span>$9900</span>
                        </div>
                        <div className='delete'>
                            <img src={DeleteItemImg} alt='delete item img'/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}