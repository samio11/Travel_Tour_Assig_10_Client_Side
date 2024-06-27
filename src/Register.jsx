import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import regis from './register.json';
import { Link } from 'react-router-dom';
import { AuthContent } from './AuthFile/AuthData';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContent)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Please Enter a valid email address`,
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }
        if(!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)){
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: `Please Enter a valid Password`,
                showConfirmButton: false,
                timer: 1500
            })
            return;
        }

        const user = { name, email, photoUrl, password }
        console.log(user);
        createUser(email, password)
            .then(res => {
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: photoUrl
                })
                    .then(res => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Created',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        form.reset();
                    })
                    .catch(err => {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'error',
                            title: `${err.message}`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    })
            })
            .catch(err => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 h-full">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <Lottie animationData={regis}></Lottie>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="Photo Url" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <Link className='text-xs underline' to={'/login'}>Already Have an account</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;