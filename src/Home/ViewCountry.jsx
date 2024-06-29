import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ViewCountry = () => {
    const countryData = useLoaderData();
    const navigate = useNavigate()
    console.log(countryData);
    const handleOneCountry = (id) =>{
      navigate(`/viewDetail/${id}`)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {
                countryData.map((x, idx) => {
                    return <div key={idx} className="card w-full h-[600px] bg-base-100 shadow-xl">
                        <figure>
                            <img
                                src={x.imageUrl}
                                alt="Album" />
                        </figure>
                        <div className="card-body space-y-2">
                            <button className="btn">
                                {x.touristSpotName}
                                <div className="badge badge-secondary">{x.countryName}</div>
                            </button>
                            <p className='text-sm font-semibold'>Location:- {x.location}</p>
                            <p className='text-xs'>{x.shortDescription}</p>
                            <div className="badge badge-secondary badge-outline">{x.averageCost}$     {x.travelTime}</div>
                            <p className='text-xs font-bold'>Season:- {x.seasonality}</p>
                            <div className="card-actions justify-center">
                            <button onClick={()=>handleOneCountry(x._id)} className="btn btn-wide btn-outline btn-secondary">View More</button>
                            </div>
                        </div>
                    </div>
                })
            }
        </div>
    );
};

export default ViewCountry;