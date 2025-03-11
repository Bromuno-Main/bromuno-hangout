'use client'
import Image from "next/image";
import React, { Dispatch, SetStateAction } from 'react';

interface LoginProps {
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ login, setLogin }) => {
    return (
            <div>
                <div className="w-[46%] h-full lg:flex bg-green hidden items-center justify-center">
                    <Image
                        src={"/banner.svg"}
                        alt="banner"
                        height={200}
                        width={200}
                        className="lg:w-1/2 lg:h-full"
                    />
                </div>
                <form onSubmit={(e) => { e.preventDefault(); setLogin(true); }}>
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
    );
};

export default Login;
