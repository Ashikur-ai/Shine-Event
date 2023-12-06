import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const SlideCard = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    
    return (
        <div>
            <Carousel responsive={responsive}>

                <div className='items-center rounded-lg'>
                    <img className='mx-auto rounded-3xl w-3/4' src="https://i.ibb.co/7W28rCP/banner.png" alt="" />
                </div>

                <div className='items-center rounded-lg'>
                    <img className='rounded-3xl w-4/5' src="https://i.ibb.co/NNSq2Yb/theatre.jpg" alt="" />
                </div>

                <div className='items-center rounded-lg'>
                    <img className='rounded-3xl w-4/5' src="https://i.ibb.co/NYv9g4N/movie.png" alt="" />
                </div>

                <div className='items-center rounded-lg'>
                    <img className='rounded-3xl w-4/5' src="https://i.ibb.co/h1qBm69/banner4.jpg" alt="" />
                </div>


               
            </Carousel>
        </div>
    );
};

export default SlideCard;