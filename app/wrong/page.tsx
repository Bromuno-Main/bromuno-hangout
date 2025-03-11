// app/login/page.tsx
"use client";
import React, { useState } from "react";
import Login from "../../components/login/Login";

export default function LoginPage() {
  const [login, setLogin] = useState(true);

  return (
    <div className="h-screen w-screen">
      {/* Use the Login component here */}

      <Login login={login} setLogin={setLogin} />
    </div>
  );
}
