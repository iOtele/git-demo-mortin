import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const ProductDisplay = ({ item }) => {
  return (
    <div className="container mx-auto px-4 md:px-12 lg:px-24">
      <div className="flex justify-between items-center py-4">
        <Link to="/listing">
          <div className="flex items-center gap-2">
            <img src={assets.BackIcon} alt="Back" className="w-5" />
            <span className="text-lg font-semibold">Back</span>
          </div>
        </Link>
        <div className="flex gap-4">
          <button className="border-2 border-yellow-400 text-yellow-500 px-4 py-2 rounded-md">
            Contact Manager
          </button>
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>

      <div className="rounded-lg overflow-hidden h-80 md:h-96">
        <img
          src={item.banners[0].img}
          alt={item.name}
          className="w-full h-[70svh] object-fill md:h-full rounded-lg shadow-md"
        />
      </div>

      <div className="py-4">
        <h1 className="text-2xl font-bold">{item.name}</h1>
        <div className="flex items-center gap-4 py-2">
          <p className="text-gray-500 flex items-center gap-2">
            <img src={assets.location} alt="Location" className="w-5" />
            {item.location}
          </p>
          <div className="flex gap-2">
            {item.status && (
              <div className="px-3 py-1 bg-red-500 text-white rounded-full">
                Featured
              </div>
            )}
            {/* {product.discounted && (
              <div className="px-3 py-1 bg-green-500 text-white rounded-full">
                Discounted
              </div>
            )} */}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-yellow-100 p-4 rounded-lg">
        {[
          { icon: assets.icon_2, label: "Electricity" },
          { icon: assets.icon_1, label: "Security" },
          { icon: assets.icon_3, label: "Running Water" },
          { icon: assets.icon_4, label: "Close to Market" },
          { icon: assets.Building, label: "Close to Schools" },
          { icon: assets.Hospital, label: "Close to Hospital" },
          { icon: assets.Dumbbell, label: "Gym" },
          { icon: assets.Diploma, label: "Deed of Assignment" },
          { icon: assets.Diploma, label: "Deed of Contract" },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm"
          >
            <img src={item.icon} alt={item.label} className="w-6" />
            <span className="text-sm font-semibold">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="py-6">
        <h2 className="text-xl font-bold">Details</h2>
        <div className="border border-gray-400 rounded-lg p-4 mt-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <img src={assets.Dollar} alt="Price" className="w-6" />
              <p className="font-semibold">
                Price:{" "}
                <span className="text-gray-500">
                  N{parseInt(item.cost, 10).toLocaleString("en-NG")}
                </span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.Time} alt="Duration" className="w-6" />
              <p className="font-semibold">
                Payment Duration:{" "}
                <span className="text-gray-500">3 - 12 Months</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.Discount} alt="Interest" className="w-6" />
              <p className="font-semibold">
                Interest Rate: <span className="text-gray-500">12%</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.Estate} alt="Type" className="w-6" />
              <p className="font-semibold">
                Property Type: <span className="text-gray-500">Terrace</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.Square} alt="Size" className="w-6" />
              <p className="font-semibold">
                Property Size:{" "}
                <span className="text-gray-500">{item.product_size}</span>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={assets.Select} alt="Land" className="w-6" />
              <p className="font-semibold">
                Land Area:{" "}
                <span className="text-gray-500">{item.propert_size}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;

// import React from "react";
// import { assets } from "../assets/assets";

// const ProductDisplay = ({ product }) => {
//   return (
//     <div className="container mx-auto px-4 md:px-12 lg:px-24">
//       <div className="flex justify-between items-center py-4">
//         <div className="flex items-center gap-2">
//           <img src={assets.BackIcon} alt="Back" className="w-5" />
//           <span className="text-lg font-semibold">Back</span>
//         </div>
//         <div className="flex gap-4">
//           <button className="border-2 border-yellow-400 text-yellow-500 px-4 py-2 rounded-md">
//             Contact Manager
//           </button>
//           <button className="bg-yellow-500 text-white px-4 py-2 rounded-md">
//             Apply
//           </button>
//         </div>
//       </div>

//       <div className="rounded-lg overflow-hidden h-80 md:h-96">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-full object-cover"
//         />
//       </div>

//       <div className="py-4">
//         <h1 className="text-2xl font-bold">{product.title}</h1>
//         <div className="flex items-center gap-4 py-2">
//           <p className="text-gray-500 flex items-center gap-2">
//             <img src={assets.location} alt="Location" className="w-5" />
//             {product.location}
//           </p>
//           <div className="flex gap-2">
//             {product.featured && (
//               <div className="px-3 py-1 bg-red-500 text-white rounded-full">
//                 Featured
//               </div>
//             )}
//             {product.discounted && (
//               <div className="px-3 py-1 bg-green-500 text-white rounded-full">
//                 Discounted
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-yellow-100 p-4 rounded-lg">
//         {[
//           { icon: assets.icon_2, label: "Electricity" },
//           { icon: assets.icon_1, label: "Security" },
//           { icon: assets.icon_3, label: "Running Water" },
//           { icon: assets.icon_4, label: "Close to Market" },
//           { icon: assets.Building, label: "Close to Schools" },
//           { icon: assets.Hospital, label: "Close to Hospital" },
//           { icon: assets.Dumbbell, label: "Gym" },
//           { icon: assets.Diploma, label: "Deed of Assignment" },
//           { icon: assets.Diploma, label: "Deed of Contract" },
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="flex items-center gap-2 p-2 bg-white rounded-md shadow-sm"
//           >
//             <img src={item.icon} alt={item.label} className="w-6" />
//             <span className="text-sm font-semibold">{item.label}</span>
//           </div>
//         ))}
//       </div>

//       <div className="py-6">
//         <h2 className="text-xl font-bold">Details</h2>
//         <div className="border border-gray-400 rounded-lg p-4 mt-2">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="flex items-center gap-2">
//               <img src={assets.Dollar} alt="Price" className="w-6" />
//               <p className="font-semibold">
//                 Price: <span className="text-gray-500">N{product.price}</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={assets.Time} alt="Duration" className="w-6" />
//               <p className="font-semibold">
//                 Payment Duration:{" "}
//                 <span className="text-gray-500">3 - 12 Months</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={assets.Discount} alt="Interest" className="w-6" />
//               <p className="font-semibold">
//                 Interest Rate: <span className="text-gray-500">12%</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={assets.Estate} alt="Type" className="w-6" />
//               <p className="font-semibold">
//                 Property Type: <span className="text-gray-500">Terrace</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={assets.Square} alt="Size" className="w-6" />
//               <p className="font-semibold">
//                 Property Size:{" "}
//                 <span className="text-gray-500">{product.size}</span>
//               </p>
//             </div>
//             <div className="flex items-center gap-2">
//               <img src={assets.Select} alt="Land" className="w-6" />
//               <p className="font-semibold">
//                 Land Area: <span className="text-gray-500">{product.size}</span>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDisplay;
