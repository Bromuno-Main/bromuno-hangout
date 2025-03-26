'use client'

import React from "react";
import {Login} from "../../../components/login/Login";
import LoadingOverlay from "../../../components/LoadingOverlay";

export default function LoginPage() {

    return (
        <>
            <Login/>
            <LoadingOverlay/>
        </>
    );
};


