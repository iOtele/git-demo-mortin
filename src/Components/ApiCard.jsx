import React, { useContext } from "react";
import { StoreContext } from "./StoreContextProvider";

const ApiCard = () => {
  const { products, loadingProducts } = useContext(StoreContext);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {loadingProducts ? (
        <p>Loading products...</p>
      ) : products.length > 0 ? (
        products.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-2xl p-4 max-w-sm mx-auto"
          >
            {item.banners && item.banners.length > 0 && (
              <img
                src={item.banners[0].img}
                alt={item.name}
                className="rounded w-24 h-24 mx-auto mb-4 object-cover"
              />
            )}
            <h2 className="text-xl font-semibold text-center">{item.name}</h2>
            <p className="text-gray-600 text-center mt-2">{item.cost}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ApiCard;

// import { MapPin, User } from "lucide-react";

// const UserCard = ({ user }) => {
//   const { name, location, picture ,dob, registered} = user;

//   return (
//     <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm mx-auto">
//       <img
//         src={picture.large}
//         alt={name.first}
//         className="rounded-full w-24 h-24 mx-auto mb-4"
//       />
//       <h2 className="text-xl font-semibold text-center flex justify-center items-center gap-2">
//         <User size={20} />
//         {name.title} {name.first} {name.last} {dob.date}
//       </h2>
//       <p className="text-gray-600 text-center mt-2 flex justify-center items-center gap-2">
//         <MapPin size={18} />
//         {location.city}, {location.country}
//         {registered.age} years old
//       </p>
//     </div>
//   );
// };

// export default UserCard;
