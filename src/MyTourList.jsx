import React, { useContext, useEffect, useState } from 'react';
import { AuthContent } from './AuthFile/AuthData';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { Link, useNavigate } from 'react-router-dom';

const MyTourList = () => {
    const [userData, setUserData] = useState([]);
    const { user } = useContext(AuthContent);
    const { email } = user
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/my_tour/${email}`)
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [email])
    console.log(userData)

    const handleDelete = id => {
        console.log(id);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to restore it",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/travel_info/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        setUserData(userData.filter(i => i._id !== id))
                        swalWithBootstrapButtons.fire({
                            title: "Deleted!",
                            text: "Your Tour List deleted.",
                            icon: "success"
                        });
                    })
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your Tour was not cancelled)",
                    icon: "error"
                });
            }
        });
    }

     const handleEdit = id =>{
        console.log(id);
        navigate(`/edit_tour/${id}`)
     }
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
                                    <td>
                                    <Link to={`/edit_tour/${item._id}`} className='btn btn-outline'>Edit</Link>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className='btn btn-outline'>Delete</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyTourList;