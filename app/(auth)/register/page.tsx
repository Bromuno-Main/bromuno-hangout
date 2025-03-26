'use client'
import {Register} from "../../../components/register/Register";
import React from "react";
import LoadingOverlay from "../../../components/LoadingOverlay";

export default function RegisterPage() {


    return (<>
            <Register/>
            <LoadingOverlay/>
        </>
    );
}
