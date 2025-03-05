"use client";
import React, { useState } from 'react';
import { Login } from '../../../components/login/Login';


export default function LoginPage() {
  const [login, setLogin] = useState(true);
    return (
        <div>
      <Login login={login} setLogin={setLogin} />
        </div>
    );
};


