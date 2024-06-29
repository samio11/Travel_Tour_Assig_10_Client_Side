import React, { useContext } from 'react';
import { AuthContent } from './AuthFile/AuthData';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const EditTourInfo = () => {
    const { user } = useContext(AuthContent)
    const navigate = useNavigate()
    const data = useLoaderData();
    console.log(data)
    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const imageUrl = form.imageUrl.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const shortDescription = form.shortDescription.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;

        const formData = {
            imageUrl,
            touristSpotName,
            countryName,
            location,
            shortDescription,
            averageCost,
            seasonality,
            travelTime,
            totalVisitorsPerYear,
        };
        console.log(formData)
        fetch(`http://localhost:5000/travel_info/${data._id}`, {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Tourist Spot Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate(-1)
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Edit a Tourist Spot</h2>
            <form onSubmit={handleForm}>
                <div className="mb-4">
                    <input
                        type="text"
                        name="imageUrl"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        defaultValue={data.imageUrl}
                        placeholder="Enter image URL"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="touristSpotName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter tourist spot name"
                        defaultValue={data.touristSpotName}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="countryName"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter country name"
                        defaultValue={data.countryName}
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="location"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter location"
                        defaultValue={data.location}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        name="shortDescription"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter a short description"
                        defaultValue={data.shortDescription}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="averageCost"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter average cost"
                        defaultValue={data.averageCost}
                    />
                </div>
                <div className="mb-4">
                    <select
                        name="seasonality"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Select seasonality</option>
                        <option value="Summer">Summer</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>
                <div className="mb-4">
                    <select
                        name="travelTime"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Select travel time</option>
                        <option value="7 days">7 days</option>
                        <option value="14 days">14 days</option>
                        <option value="21 days">21 days</option>
                    </select>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        name="totalVisitorsPerYear"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        placeholder="Enter total visitors per year"
                        defaultValue={data.totalVisitorsPerYear}
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Edit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EditTourInfo;