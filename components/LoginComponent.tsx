import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../redux/store";
import { login } from "../redux/authSlice";

const LoginComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state: RootState) => state.auth);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    return (
        <form className={`flex flex-col w-full gap-3 flex-1 items-center`} onSubmit={handleSubmit}>
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
            <button className={`bg-blue-800 w-fit`} type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Logging in...' : 'Login'}
            </button>
            {error && <p className={`text-black`}>{error}</p>}
        </form>
    );
};

export default LoginComponent;
