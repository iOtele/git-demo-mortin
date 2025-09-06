import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import Title from "../Components/Title";
import Items from "../Components/Items";

const Special = () => {
 
  const { products, loadingProducts } = useContext(StoreContext);

  return (
    <div className="container mx-auto py-8 flex flex-col transition-all duration-200 px-[8%] md:px-[10%] mt-20">
      <Title title="Mortln Special" />
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

export default Special;

// import React, { useContext } from "react";
// import { StoreContext } from "../Context/StoreContext";
// import Title from "../Components/Title";
// import Items from "../Components/Items";

// const Special = () => {
//   // const { allproperty_list } = useContext(StoreContext);
//     const { products, loadingProducts } = useContext(StoreContext);

//   return (
//     <div className="container mx-auto py-8 flex flex-col transition-all duration-200 px-[8%] md:px-[10%] mt-20">
//       <Title title="Mortln Special" />
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-6">
//         {allproperty_list.map((item, index) => (
//           <Items
//             key={index}
//             id={item.id}
//             image={item.image}
//             title={item.title}
//             location={item.location}
//             icons={item.icons}
//             featured={item.featured}
//             discounted={item.discounted}
//             price={item.price}
//             size={item.size}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Special;
