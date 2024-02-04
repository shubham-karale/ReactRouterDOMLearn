import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
    <div className="inline-flex flex-row text-black gap-8 justify-center mt-4 p-2   ">
      <Link
        to="123"
        className=" bg-indigo-600 gap-2 border-white border-spacing-2 p-2 rounded-md font-semibold hover:bg-orange-500"
      >
        Product 123
      </Link>
      <Link
        to="456"
        className=" bg-indigo-600 gap-2 border-white border-spacing-2 p-2 rounded-md font-semibold hover:bg-orange-500"
      >
        Product 456
      </Link>
      <Link
        to="789"
        className=" bg-indigo-600 gap-2 border-white border-spacing-2 p-2 rounded-md font-semibold hover:bg-orange-500"
      >
        Product 789
      </Link>
      <Link
        to="101"
        className=" bg-indigo-600 gap-2 border-white border-spacing-2 p-2 rounded-md font-semibold hover:bg-orange-500"
      >
        Product 101
      </Link>

      
      
    </div>

    <div className="">
        <Outlet />
    </div>

    </>
    
  );
}

export default Products;
