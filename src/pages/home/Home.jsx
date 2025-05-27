import './Home.css';
import { CAROUSELS } from '../../utils/carousels.js';
import Carousel from '../../components/carousel/Carousel.jsx';
import ImgCarousel from '../../components/imgCarousel/imgCarousel.jsx';

export default function Home() {
    return (
        <>
            <main>
                <section className='home'>
                  
                    <ImgCarousel />
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