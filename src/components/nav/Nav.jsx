import './Nav.css';
import searchIcon from '../../assets/images/search.svg';
import userIcon from '../../assets/images/user-icon-1.svg';
import cart from '../../assets/images/cart.svg';

export default function Nav() {
    return (
        <>
            <header>
                <nav>
                    <div className='logo-title'>
                        <h1>CoffeeShop</h1>
                    </div>
                    <div className='nav-links'>
                        <div className='search-input'>
                            <div className='search-icon'>
                                <img src={searchIcon} alt='searchIcon'/>
                            </div>
                            <input/>
                        </div>
                        <div className='user-btn'>
                            <img src={userIcon} alt='userIcon'/>
                        </div>
                        <div className='cart-btn'>
                            <img src={cart} alt='cart'/>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}