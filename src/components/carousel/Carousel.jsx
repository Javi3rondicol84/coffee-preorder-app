import './Carousel.css';
import Card from '../card/Card';

export default function Carousel( {id, title, items}) {
    {console.log(items)}
    return (
        <>
            <div className='carousel'>
                <div className='title'>
                    <h2>Most popular {title}</h2>
                </div>
                <div className='cards'>

                    { items.map((item) => (
                        <Card key={item.id} {...item} />
                    ))}

                </div>
            </div>

        </>

    );
}