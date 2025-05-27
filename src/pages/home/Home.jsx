import './Home.css';
import coffeeBanner from '../../assets/images/coffee-banner.jpg';
import { CAROUSELS } from '../../utils/carousels.js';
import Carousel from '../../components/carousel/Carousel.jsx';
import Cart from '../../components/cart/Cart.jsx';

export default function Home() {
    return (
        <>
            <main>
                <section className='home'>
                    <div className='banner'>
                        <img src={coffeeBanner} alt='coffee banner'/>
                    </div>
                    <div className='carousels'>

                        { CAROUSELS.map((carousel) => (
                            <Carousel key={carousel.id} {...carousel}/>
                        ))}

                    </div>
                </section>
            </main>
          
        </>
    );
}