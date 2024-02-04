import React from "react";
import { Button } from "@material-tailwind/react";
function Contact() {
  return (
    <div
      className="w-full h-screen max-h-fit bg-orange-400 text-white flex flex-col justify-center
     items-center"
    >
      <Button variant="gradient">gradient</Button>
      <Button variant="outlined">outlined</Button>
    </div>
  );
}

export default Contact;
