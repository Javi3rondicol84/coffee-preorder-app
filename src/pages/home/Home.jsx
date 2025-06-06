import './Home.css';
import axios from 'axios';
import { CAROUSELS } from '../../utils/carousels.js';
import Carousel from '../../components/carousel/Carousel.jsx';
import ImgCarousel from '../../components/imgCarousel/ImgCarousel.jsx';
import { useEffect, useState } from 'react';
import { useProducts } from '../../hooks/useProducts.js';
import { Spinner } from '../../components/spinner/Spinner.jsx';

export default function Home() {
    
    const { products, error, loading } = useProducts();

    return (
        <>
            <main>
                <section className='home'>
                  
                    <ImgCarousel />


                    { loading && <Spinner /> }

                    { error && <p>Error: {error.message}</p>}

                    { products.length > 0 && 
                        (<div className='carousels'>

                            { products.map((carousel) => (
                                <Carousel key={carousel.categoryId} {...carousel}/>
                            ))}

                        </div>)
                    }
                    


                </section>
            </main>
          
        </>
    );
}