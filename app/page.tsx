"use client"
import { useState } from "react";
import Login from "../components/login/Login";



export default function Home() {

  const [login, setLogin] = useState(false);

  return (
    <>
      {login && <Login login={login} setLogin={setLogin} />}
      <div className="">
        <div className="h-[300vh] bg-red-500  flex flex-col justify-between items-center">
          <h3>hi</h3>
          <h3>hello</h3>
          <button className="bg-black" onClick={
            ()=>{
              setLogin(true);
            }
          }>login</button>
        </div>
      </div>
    </>
  );
}
