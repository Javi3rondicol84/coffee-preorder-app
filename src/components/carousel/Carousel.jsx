import './Carousel.css';
import Card from '../card/Card';


function showCards(direction) {
    if(direction === 'left') {

    }
    else if(direction === 'right') {

    }
}


export default function Carousel( {id, title, items}) {
    {console.log(items)}
    return (
        <>
            <div className='carousel'>
                <div className='title'>
                    <h2>Most popular {title}</h2>
                </div>
                <button className='btn-left' onClick={() => showCards('left')}>left</button>
                <button className='btn-right' onClick={() => showCards('right')} >right</button>
                <div className='cards'>

                    { items.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}

                </div>
            </div>

        </>

    );
}