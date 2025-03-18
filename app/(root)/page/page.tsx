"use client"
import React from 'react'
import LoginComponent from "../../../components/LoginComponent";
import RegisterComponent from "../../../components/RegisterComponent";

export default function Page() {
    return (
        <div className={`flex flex-row w-full`}>
            <LoginComponent />
            <RegisterComponent  />
        </div>
    )
}
