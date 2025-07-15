import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Title from "./Title";
import Items from "./Items";

const Related = () => {
  const { products, loadingProducts } = useContext(StoreContext);

  return (
    <div className="flex flex-col w-full  mx-auto p-4   container  md:px-12 lg:px-24">
      <Title title="Related" />
      <div className="flex gap-6 text-center overflow-x-scroll p-2 scrollbar-hide">
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

export default Related;
