import coffeeBanner from '../../assets/images/imgsCarousel/coffee-banner.jpg';
import './ImgCarousel.css';      
import { MAINCAROUSEL } from '../../utils/imgCarousel';
import { useState } from 'react';

const defaultImg = {
    img: coffeeBanner,
    alt: 'coffeeBanner'
}

export default function ImgCarousel() {

    const [imgSelected, setImgSelected] = useState(defaultImg);

    function handleImgSelected(item) {
        const newSelection = {
            img: item.img,
            alt: item.alt
        }
        setImgSelected(newSelection);
    }

    return (
        <>
          <div className='banner'>
             <img src={imgSelected.img} alt={imgSelected.alt}/> 
             <div className='buttons'>
                { MAINCAROUSEL.map((item) => (
                      <button key={item.id} onClick={() => handleImgSelected(item)}></button>
                ))}
             </div>
         </div>
        </>
    )

}