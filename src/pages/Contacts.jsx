import React from "react";
import Contact from "../components/Contact";

function Contacts() {
  return (
    <div
      className="w-full h-screen max-h-fit bg-orange-500 text-white flex flex-col justify-center
     items-center "
    >
      <h1 className="text-3xl text-white">Contact</h1>

      <Contact />
    </div>
  );
}

export default Contacts;
