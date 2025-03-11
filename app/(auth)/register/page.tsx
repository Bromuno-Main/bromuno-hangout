'use client'
import { Register } from "../../../components/register/Register";
import React from "react";

export default function RegisterPage() {
  const [register, setRegister] = React.useState(false);

  return (
      <Register register={register} setRegister={setRegister} />
  );
}
