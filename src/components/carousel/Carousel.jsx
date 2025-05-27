import './Carousel.css';
import Card from '../card/Card';
import leftArrowImg from '../../assets/images/left-arrow.svg';
import rightArrowImg from '../../assets/images/right-arrow.svg';
import { useState } from 'react';

export default function Carousel( {id, title, items}) {
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const maxCardsPerPage = 5;
    
    const totalSlides = Math.ceil(items.length / maxCardsPerPage);

    function handleSlides(direction) {
        if(direction === 'left') {
            setCurrentSlide((prevCurrentSlide) => Math.max((prevCurrentSlide - 1), 0));
        }
        else if(direction === 'right') {
            setCurrentSlide((prevCurrentSlide) => Math.min(prevCurrentSlide + 1), totalSlides - 1);
        }
    }

    function handleTouchStart(e) {
        setStartX(e.touches[0].clientX);
    }

    function handleTouchMove(e) {
        setEndX(e.touches[0].clientX);
    }

    function handleTouchEnd() {
        const directionX = startX - endX;

        if(directionX > 50) {
            handleSlides('right');
        }
        else if(directionX < -50) {
            handleSlides('left');
        }
    }




 //-50% mover 5 cards hacia la izquierda. 50% mover 5 cards a la derecha
    return (
        <>
            <div className='carousel'>
                <div className='title'>
                    <h2>Most popular {title}</h2>
                </div>
                <button disabled={currentSlide === 0} className='btn-left' onClick={() => handleSlides('left')}><img src={leftArrowImg} alt='left-arrow'/></button>
                <button disabled={currentSlide === (totalSlides - 1)} className='btn-right' onClick={() => handleSlides('right')}><img src={rightArrowImg} alt='right-arrow'/></button>
                <div className='cards' 
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={
                    {
                            transform: `translateX(-${currentSlide * 100}%)`
                    }
                }>

                    { items.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}

                </div>
            </div>

        </>

    );
}