import React, { useContext } from "react";
import Title from "./Title";
import { StoreContext } from "../Context/StoreContext";
import Items from "./Items";
import { assets } from "../assets/assets";

const Recommended = () => {
  const { products, loadingProducts } = useContext(StoreContext);

  return (
    <div className="container mx-auto py-8 flex flex-col transition-all duration-200 px-[8%] md:px-[10%] mt-20">
      <div className="flex justify-between items-center mb-6">
        <Title title="Recommended" />{" "}
        <div className="flex justify-center items-center rounded-full border border-secondary-color cursor-pointer h-12 w-12 sm:h-14 sm:w-14 hover:bg-yellow-100">
          <img src={assets.next} alt="Next" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {loadingProducts ? (
          <p>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((product) => <Items key={product.uid} item={product} />)
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Recommended;
