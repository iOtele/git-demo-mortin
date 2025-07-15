// import React, { useEffect, useState } from "react";
// import Axios from "axios";

// const Sample = () => {
//   const [products, setProducts] = useState([]);
//   const [limit, setLimit] = useState(20); // default limit
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     Axios.get(
//       `https://preprod.mortin.co/api/ui/products?pg=1&limit=${limit}&order=desc`,
//       {
//         headers: {
//           Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
//         },
//       }
//     )
//       .then((res) => {
//         setProducts(res.data.data.product || []);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.error(err);
//       });
//   }, [limit]);

//   // Example: To change limit, call setLimit(newLimit)
//   return (
//     <div>
//       <h1>Products</h1>
//       <button onClick={() => setLimit(2)}>Show 2</button>
//       <button onClick={() => setLimit(4)}>Show 4</button>
//       <button onClick={() => setLimit(6)}>Show 6</button>
//       <button onClick={() => setLimit(8)}>Show 8</button>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           {products.map((item) => (
//             <div key={item.uid} className="bg-white p-4 rounded shadow">
//               {/* Banners */}
//               {item.banners && item.banners.length > 0 && (
//                 <img
//                   src={item.banners[0].img}
//                   alt={item.name}
//                   className="w-full h-32 object-cover rounded mb-2"
//                 />
//               )}
//               <h2 className="font-bold">{item.name}</h2>
//               <p>{item.location}</p>
//               <p>N {parseInt(item.cost, 10).toLocaleString("en-NG")}</p>
//               <p>Status: {item.status}</p>
//               <p>Tags: {item.tags && item.tags.join(", ")}</p>
//               <p>Description: {item.description}</p>
//               {/* Plans */}
//               {item.plans && item.plans.length > 0 && (
//                 <div>
//                   <strong>Plans:</strong>
//                   <ul>
//                     {item.plans.map((plan) => (
//                       <li key={plan.id}>
//                         {plan.duration} months @ rate {plan.rate}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Sample;

// import React, { useContext } from "react";
// import { StoreContext } from "../Context/StoreContext";

// const ApiSample = () => {
//   const { products, loadingProducts } = useContext(StoreContext);

//   return (
//     <div className="w-full shadow-md p-3 rounded-lg">
//       <h1>Hello World</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {loadingProducts ? (
//           <p>Loading products...</p>
//         ) : products.length > 0 ? (
//           products.map((item, index) => (
//             <div key={index} className="bg-white p-4 rounded-lg shadow">
//               {item.banners && item.banners.length > 0 && (
//                 <div className="mb-2">
//                   {item.banners.map((banner, bIndex) => (
//                     <img
//                       key={bIndex}
//                       src={banner.img}
//                       alt={`Banner ${bIndex + 1}`}
//                       className="mb-2 w-full h-32 object-cover rounded"
//                     />
//                   ))}
//                 </div>
//               )}
//               <p>{item.name}</p>
//               <p>{item.cost}</p>
//             </div>
//           ))
//         ) : (
//           <p>No products found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ApiSample;

import React, { useEffect, useState } from "react";
import Axios from "axios";

const Sample = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get(
      "https://preprod.mortin.co/api/ui/products?pg=1&limit=20&order=desc",
      {
        headers: {
          Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
        },
      }
    )
      .then((data) => {
        setProducts(data.data.data.product || []);
        console.log(data.data.data || []);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-full shadow-md p-3 rounded-lg">
      <h1>Hello World</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-4 rounded-lg shadow"
            >
              {item.status && (
                <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  Featured
                </div>
              )}
              {/* Display all banners for this product */}
              {item.banners && item.banners.length > 0 && (
                <div className="mb-2">
                  {item.banners.map((banner, bIndex) => (
                    <img
                      key={bIndex}
                      src={banner.img}
                      alt={`Banner ${bIndex + 1}`}
                      className="mb-2 w-full h-32 object-cover rounded"
                    />
                  ))}
                </div>
              )}
              <p>{item.location}</p>
              <p>N {parseInt(item.cost, 10).toLocaleString("en-NG")}</p>
              {/* <p>
  N{" "}
  {Number(item.cost)
    .toLocaleString("en-NG", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
</p> */}
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Sample;

// import React, { useEffect, useState } from "react";
// import Axios from "axios";

// const Sample = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     Axios.get(
//       "https://preprod.mortin.co/api/ui/products?pg=1&limit=20&order=desc",
//       {
//         headers: {
//           Authorization: "Bearer PRE-PRODUCTION-AUTH-KEY",
//         },
//       }
//     )

//       .then(
//         // (data) => console.log(data.data.data.product)
//         setProducts(data.data.product || [])
//       )
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div className="w-full shadow-md p-3 rounded-lg">
//       <h1>Hello World</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {products.length > 0 ? (
//           products.map((item) => (
//             <div key={item.id} className="bg-white p-4 rounded-lg shadow">
//               <img
//                 src={item.product}
//                 className="w-full h-48 object-cover rounded"
//               />
//             </div>
//           ))
//         ) : (
//           <p>Loading products...</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Sample;

// import React, { useEffect, useState } from "react";
// import UserCard from "./ApiCard";

// const Sample = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch("https://randomuser.me/api/")
//       .then((res) => res.json())
//       .then((data) => setUser(data.results[0]))
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       {user ? <UserCard user={user} /> : <p>Loading...</p>}
//     </div>
//   );
// };

// export default Sample;
