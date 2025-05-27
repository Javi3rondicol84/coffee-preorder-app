import './Nav.css';
import searchIcon from '../../assets/images/search.svg';
import userIcon from '../../assets/images/user-icon-1.svg';
import cart from '../../assets/images/cart.svg';
import { useState } from 'react';

export default function Nav() {
    const [inputActive, setInputActive] = useState(false);

    return (
        <>
            <header>
                <nav>
                    <div className='logo-title'>
                        <a href='/'><h1>CoffeeShop</h1></a>
                    </div>
                    <div className='nav-links'>
                        <div className='search-input'>
                            <div className='search-icon'>
                               {!inputActive && <img src={searchIcon} alt='searchIcon'/>} 
                            </div>
                            <input onClick={() => setInputActive(true)}/>
                        </div>
                        <div className='user-btn'>
                            <a href='/login'><img src={userIcon} alt='userIcon'/></a>
                        </div>
                        <div className='cart-btn'>
                            <a href='/cart'><img src={cart} alt='cart'/></a>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}