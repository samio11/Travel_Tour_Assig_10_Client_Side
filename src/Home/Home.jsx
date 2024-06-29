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
import faq from '../faq.json'
import cont from '../contact.json'
import Lottie from 'lottie-react';

const Home = () => {
    const [totalTourPlan, setTotalTourPlan] = useState([]);
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/travel_info')
            .then(res => res.json())
            .then(data => setTotalTourPlan(data))
    }, [])

    useEffect(() => {
        fetch('http://localhost:5000/country')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
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
                    country?.map((x, idx) => <Country key={idx} country={x}></Country>)
                }
            </div>
            <div className='mt-2 mb-2 flex justify-center items-center'>
                <span className='text-3xl text-red-500 font-bold'>FAQ</span>
            </div>
            {/* FAQ  */}
            <div className='my-4 flex flex-col md:flex-row justify-center items-center gap-2'>

                <div className='w-full lg:w-[50%]'>
                    <Lottie className='h-[300px]' animationData={faq}></Lottie>
                </div>
                <div className='w-full lg:w-[45%]'>
                    <div className="join join-vertical w-full">
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" defaultChecked />
                            <div className="collapse-title text-xl font-medium">What services does your travel agency provide?</div>
                            <div className="collapse-content">
                                <p className='text-xs'>Our travel agency offers a wide range of services to ensure your travel experience is smooth and enjoyable. We handle flight bookings, hotel reservations, car rentals, vacation packages, cruise bookings, travel insurance, and customized itineraries.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">How do I book a trip with your travel agency?</div>
                            <div className="collapse-content">
                                <p className='text-xs'>Booking a trip with us is easy and convenient. You can book online through our website by selecting your destination and following the prompts.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border-base-300 border">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">What should I do if I need to cancel or change my booking?</div>
                            <div className="collapse-content">
                                <p className='text-xs'>If you need to cancel or change your booking, please contact us as soon as possible. For cancellations, reach out to our customer service team by phone or email. Cancellation policies vary depending on the airline, hotel, or service provider, and our team will provide you with the specific terms and conditions and any applicable fees.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contract US  */}
            <div className='mt-4 mb-4 flex justify-center items-center'>
                <span className='text-3xl text-red-500 font-bold'>Contact Us</span>
            </div>
            <div className='my-4 flex flex-col md:flex-row-reverse justify-center items-center gap-4'>
                <div className='w-full md:w-[50%]'>
                    <Lottie className='h-[300px]' animationData={cont}></Lottie>
                </div>
                <div className='w-full md:w-[45%]'>
                    <div className="flex flex-col items-center justify-center light">
                        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                Subscribe to Our New Updates
                            </h2>

                            <form className="flex flex-col">
                                <input
                                    type="email"
                                    className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                                    placeholder="Enter your email address"
                                />

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                                >
                                    Subscribe
                                </button>
                            </form>

                            <div className="flex justify-center mt-4">
                                <a href="#" className="text-sm text-gray-600 hover:underline">
                                    Privacy Policy
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <footer className="footer footer-center bg-base-300 text-base-content p-4">
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default Home;