import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Title from "./Title";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import Items from "./Items";

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
          <Link to="/Listing">
            <img src={assets.next} alt="Next" />
          </Link>
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

// import React, { useContext } from "react";
// import { StoreContext } from "../Context/StoreContext";
// import Title from "./Title";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";
// import Items from "./Items";

// const Featured = () => {
//   const { house_list } = useContext(StoreContext);
//   return (
//     <div className=" container mx-auto py-8 flex flex-col transition-all duration-200  px-[8%]  md:px-[8%] mt-20 xl:px-[10%]">
//       <div className="flex justify-between items-center w-full">
//         <Title title="Featured" />
//         <div className="flex justify-center items-center rounded-full border border-secondary-color cursor-pointer h-16 w-16 hover:bg-yellow-100">
//           <Link to="/Listing">
//             <img src={assets.next} alt="Next" />
//           </Link>
//         </div>
//       </div>
//       <div className="flex gap-4 text-center mt-4  items-center justify-center">
//         <div className="flex flex-col sm:flex-row gap-8 ">
//           {house_list.map((item, index) => (
//             <Items
//               key={index}
//               id={item.id}
//               image={item.image}
//               title={item.title}
//               location={item.location}
//               icons={item.icons}
//               featured={item.featured}
//               discounted={item.discounted}
//               price={item.price}
//               size={item.size}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;

// import React, { useContext, useEffect, useState } from "react";

// // import { StoreContext } from "../Context/StoreContext";
// import Title from "./Title";
// import { assets } from "../assets/assets";
// import { Link } from "react-router-dom";
// import Items from "./Items";

// const Featured = () => {
//   // const { house_list } = useContext(StoreContext);
//   // const { page } = useContext(StoreContext);
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       setLoading(true);
//       try {
//         const response = await fetch(
//           `https://preprod.mortin.co/api/ui/products?pg=1&limit=12&order=desc`,
//           {
//             headers: {
//               Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
//             },
//           }
//         );

//         if (!response.ok) throw new Error("Failed to fetch products");

//         const data = await response.json();
//         setProducts(data?.data || []);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;
//   return (
//     <div className=" container mx-auto py-8 flex flex-col transition-all duration-200  px-[8%]  md:px-[8%] mt-20 xl:px-[10%]">
//       <div className="flex justify-between items-center w-full">
//         <Title title="Featured" />
//         <div className="flex justify-center items-center rounded-full border border-secondary-color cursor-pointer h-16 w-16 hover:bg-yellow-100">
//           <Link to="/Listing">
//             <img src={assets.next} alt="Next" />
//           </Link>
//         </div>
//       </div>
//       <div className="flex gap-4 text-center mt-4  items-center justify-center">
//         <div className="flex flex-col sm:flex-row gap-8 ">
//           {products?.length > 0 ? (
//             products.map((item) =>
//               item && item.id && item.thumbnail ? (
//                 <Items
//                   key={item.id}
//                   id={item.id}
//                   title={item.name}
//                   image={item.thumbnail}
//                   featured={item?.features?.includes("featured")}
//                   discounted={item?.features?.includes("discount")}
//                   size={item.size || "Unknown"}
//                   location={item.address?.lga?.name || "Location"}
//                   icons={["/icon-bed.svg", "/icon-bath.svg"]}
//                   price={item.price}
//                 />
//               ) : null
//             )
//           ) : (
//             <p>No products found</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Featured;
