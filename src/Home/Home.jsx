import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Home = () => {
    return (
        <div className='w-full'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-[url('https://t4.ftcdn.net/jpg/03/19/74/61/360_F_319746107_n99b20pTyXt8xYJXQqVBI5dJVttUANFn.jpg')] bg-no-repeat bg-cover w-full h-[600px] flex justify-center items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className='text-white w-[65%] space-y-3 relative z-10'>
                            <h2 className='text-3xl font-bold'>Explore Exotic Destinations</h2>
                            <p className='text-sm'>Discover the world's most breathtaking destinations with our tailor-made travel packages. Whether it's the sun-soaked beaches of the Maldives, the vibrant culture of Bali, or the untouched beauty of Patagonia, your next adventure awaits. Let us take you there in style and comfort.</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[url('https://www.thesmartbusinesstourist.com/content/images/size/w1000/2023/09/travel-agency.jpeg')] bg-no-repeat bg-cover w-full h-[600px] flex justify-center items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className='text-white w-[65%] space-y-3 relative z-10'>
                            <h2 className='text-3xl font-bold'>Unforgettable Family Vacations</h2>
                            <p className='text-sm'>Create lasting memories with family-friendly vacations designed for fun, relaxation, and adventure. From the magical landscapes of Disney World to the serene escapes of mountain retreats, we have something for every family. Start planning your dream holiday today!</p>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="bg-[url('https://www.the-travel-franchise.com/wp-content/uploads/2023/02/Blogs-39.png')] bg-no-repeat bg-cover w-full h-[600px] flex justify-center items-center relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                        <div className='text-white w-[65%] space-y-3 relative z-10'>
                            <h2 className='text-3xl font-bold'>Luxurious Honeymoon Escapes</h2>
                            <p className='text-sm'>Celebrate your love with a luxurious honeymoon that you'll cherish forever. Picture-perfect locations, private villas, and bespoke experiences await you. From the romantic sunsets in Santorini to the crystal-clear waters of Bora Bora, let us craft the perfect beginning to your forever.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;