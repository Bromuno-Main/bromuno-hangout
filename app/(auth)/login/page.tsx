'use client'
import Login from "../../../components/login/Login";
import React from "react";

export default function LoginPage() {
  const [login, setLogin] = React.useState(false);

  return (
      <Login login={login} setLogin={setLogin} />
  );
}
