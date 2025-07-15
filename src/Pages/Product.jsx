import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../Components/ProductDisplay";
import Description from "../Components/Description";
import Map from "../Components/Map";
import Related from "../Components/Related";
import Footer from "./Footer";

const Product = () => {
  const { products, loadingProducts } = useContext(StoreContext);
  const { productId } = useParams();

 
  const product =
    products.find((item) => String(item.uid) === String(productId)) ||
    products.find((item) => Number(item.id) === Number(productId));

  if (loadingProducts) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product">
      <ProductDisplay item={product} />
      <Description />
      <Map />
      <Related />
    </div>
  );
};

export default Product;

// import React, { useContext } from "react";
// import { StoreContext } from "../Context/StoreContext";
// import { useParams } from "react-router-dom";
// import ProductDisplay from "../Components/ProductDisplay";
// import Description from "../Components/Description";
// import Map from "../Components/Map";
// import Related from "../Components/Related";
// import Footer from "./Footer";

// const Product = () => {
//   const { allproperty_list } = useContext(StoreContext);
//   const { productId } = useParams();

//   const product = allproperty_list.find(
//     (item) => item.id === Number(productId)
//   );

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="product">
//       <ProductDisplay product={product} />
//       <Description />
//       <Map />
//       <Related />
//       <Footer />
//     </div>
//   );
// };

// export default Product;
