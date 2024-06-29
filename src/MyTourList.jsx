import React, { useContext, useEffect, useState } from 'react';
import { AuthContent } from './AuthFile/AuthData';

const MyTourList = () => {
    const [userData, setUserData] = useState([]);
    const { user } = useContext(AuthContent);
    const { email } = user
    useEffect(() => {
        fetch(`http://localhost:5000/my_tour/${email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [email])
    console.log(userData)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Tour Sport</th>
                            <th>Location</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            userData.map((item, index) => (
                                <tr key={index}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.imageUrl}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{item.touristSpotName}</div>
                                                <div className="text-sm opacity-50">{item.countryName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                       {item.location}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{item.averageCost}$</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            ))
                        }




                        {/* <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr> */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTourList;