import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Title from "./Title";

import Items from "./Items";
import { assets } from "../assets/assets";

const Featured = () => {
  const { products, loadingProducts } = useContext(StoreContext);

  // Filter for only featured products
  // const featuredProducts = products.filter(
  //   (item) => item.status === "Featured"
  // );

  return (
    <div className="container mx-auto py-8 flex flex-col transition-all duration-200 px-[8%] md:px-[8%] mt-20 xl:px-[10%]">
      <div className="flex justify-between items-center w-full">
        <Title title="Featured" />
        <div className="flex justify-center items-center rounded-full border border-secondary-color cursor-pointer h-16 w-16 hover:bg-yellow-100">
          <img src={assets.next} alt="Next" />
        </div>
      </div>
      <div className="flex gap-4 text-center mt-4 items-center justify-center ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loadingProducts ? (
            <p>Loading products...</p>
          ) : products.length > 0 ? (
            products.map((item) => (
              <div key={item.uid}>
                <Items item={item} />
              </div>
            ))
          ) : (
            <p>No featured products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Featured;
