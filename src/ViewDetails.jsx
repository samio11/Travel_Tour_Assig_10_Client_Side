import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { TiWorld } from "react-icons/ti";
import { MdMonetizationOn } from "react-icons/md";
import { FaPeopleGroup } from "react-icons/fa6";

const ViewDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    console.log(data);
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div>
            <div className="hero bg-base-200 h-auto lg:h-[80vh]">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={data.imageUrl}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{data.touristSpotName}</h1>
                        <div className='flex justify-start items-center gap-3 my-4'>
                            <TiWorld size={24} className="mr-2" />
                            <span>{data.countryName}</span>
                        </div>
                        <div className='flex justify-center items-center gap-3 my-4'>
                            <span>{data.shortDescription}</span>
                        </div>
                        <div className='flex justify-start items-center gap-3 my-4'>
                            <MdMonetizationOn size={24} className="mr-2" />
                            <span>{data.averageCost}$ ~ {data.travelTime}</span>
                        </div>
                        <div className='flex justify-start items-center gap-3 my-4'>
                            <FaPeopleGroup size={24} className="mr-2" />
                            <span>{data.totalVisitorsPerYear}/year</span>
                        </div>
                        <div className='flex justify-start items-center gap-3 my-4'>
                            Season to go:-
                            <span>{data.seasonality}</span>
                        </div>

                        <div className='flex justify-center items-center'>
                            <button onClick={handleBack} className="btn btn-outline">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;