import React from "react";

import { useParams } from "react-router-dom";

// Notes: useParams hook from the react-router-dom library. This hook allows you to access the URL parameters from the current route.

function ProductDetailsPage() {
  const params = useParams();

  return (
    <div className="bg-slate-900 mt-5 ">
      <h1 className="text-3xl text-white">
        Inside Product Details : {params.productId}
      </h1>
    </div>
  );
}

export default ProductDetailsPage;
