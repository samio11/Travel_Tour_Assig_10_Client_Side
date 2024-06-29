import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Country from './Country';
import ThemeControl from './ThemeControl';

const Home = () => {
    const [totalTourPlan, setTotalTourPlan] = useState([]);
    const [country,setCountry] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/travel_info')
            .then(res => res.json())
            .then(data => setTotalTourPlan(data))
    }, [])

    useEffect(()=>{
        fetch('http://localhost:5000/country')
        .then(res => res.json())
        .then(data => setCountry(data))
    },[])
    console.log(totalTourPlan)
    return (
        <div>
            <ThemeControl></ThemeControl>
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
            <div className='mb-5'>
                <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold', fontSize: '40px', textAlign: 'center' }}>
                    Tourist Spot{' '}
                    <span style={{ color: 'red', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={['Coxs Bazar', 'Bangkok', 'Bali', 'Siem Reap']}
                            loop={Infinity}
                            cursor
                            cursorStyle='_'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </h1>
            </div>
            <div className='mt-5 mb-s grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    totalTourPlan.map((tourPlan, index) => (
                        <div key={index} className='p-4'>
                            <div className="rounded-md shadow-md bg-gray-50 text-gray-800">
                                <img src={tourPlan.imageUrl} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
                                <div className="flex flex-col justify-between p-6 space-y-8">
                                    <div className="space-y-2">
                                        <h2 className="text-3xl font-semibold tracking-wide">{tourPlan.touristSpotName}</h2>
                                        <p className="text-gray-800">Season to Visit:- <span className='text-green-500'>{tourPlan.seasonality}</span></p>
                                    </div>
                                    <Link to={`/viewDetail/${tourPlan._id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-black text-gray-50">View Details</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            {/* country section */}
            <div className='text-center my-5'>
                  <h2 className='font-bold text-3xl'>Top Visited <span className='text-red-700'>Country</span></h2>
            </div>
            <div className='my-5 grid grid-cols-1 md:grid-cols-3 gap-3'>
                 {
                    country?.map((x,idx)=><Country key={idx} country={x}></Country>)
                 }
            </div>
        </div>
    );
};

export default Home;