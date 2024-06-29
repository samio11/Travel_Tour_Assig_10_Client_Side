import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const AllTourSpot = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);
    const handleView = id =>{
        navigate(`/viewDetail/${id}`)
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    data?.map((x,idx)=>{
                        return <div key={idx} className="card card-side bg-base-100 shadow-xl">
                        <figure>
                            <img
                               className='w-full lg:w-[300px] h-full lg:h-[250px]'

                                src={x.imageUrl}
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{x.touristSpotName}</h2>
                            <p className='text-xs'>People Visit:- <span className='font-semibold'>{x.totalVisitorsPerYear}/year</span></p>
                            <p className='text-xs'>Cost:- <span className='font-semibold'>{x.averageCost}$ {x.travelTime}</span></p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleView(x._id)} className="btn btn-outline btn-primary">View</button>
                            </div>
                        </div>
                    </div>
                    })
                }
            </div>
        </div>
    );
};

export default AllTourSpot;