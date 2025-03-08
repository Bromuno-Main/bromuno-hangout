import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import {register} from "../redux/authSlice";

const RegisterComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '+2349059429987',
        purposeOfJoining:["Fun"],
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(register(formData));
    };

    return (
        <form className={`flex flex-col w-full gap-3 flex-1 items-center`} onSubmit={handleSubmit}>
            <input
                className={`w-full text-gray-600`}
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
            />
            <input
                className={`w-full text-gray-600`}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <input
                className={`w-full text-gray-600`}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button className={`w-fit bg-blue-800`} type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Registering...' : 'Register'}
            </button>
            {error && <p className={`text-black`}>{error}</p>}
        </form>
    );
};

export default RegisterComponent;
