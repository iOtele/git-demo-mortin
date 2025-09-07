import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Items = ({ item }) => {
  if (!item) return null;
  const icons = [
    assets.iconCamera,
    assets.iconLight,
    assets.iconTower,
    assets.iconPath,
  ];
  return (
    <div className="container w-full md:w-3xl xl:w-5xl shadow-md p-3 rounded-lg">
      <div className="relative w-full cursor-pointer">
        {item.status && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            Featured
          </div>
        )}
        <Link to={`/product/${item.uid}`}>
          {item.banners && item.banners.length > 0 && (
            <img
              onClick={() => window.scrollTo(0, 0)}
              src={item.banners[0].img}
              alt={item.name}
              className="object-cover rounded w-full h-48 md:h-64"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col items-start  md:text-left  pt-3">
        <h2 className="text-lg font-bold line-clamp-1">{item.name}</h2>
        <span className="text-gray-500 text-sm flex mt-1 gap-1 font-medium">
          <img src={assets.locationIcon} alt="Location" className="w-4 h-4" />
          {item.location}
        </span>
        <div className="flex justify-between items-center w-full font-semibold mt-3">
          <p className="text-lg">
            N {parseInt(item.cost, 10).toLocaleString("en-NG")}
          </p>
          <Link to={`/product/${item.uid}`}>
            <button className="bg-secondary-color text-black font-bold text-sm px-4 py-1 rounded">
              Apply
            </button>
          </Link>
        </div>
        <div className="flex justify-between items-center w-full mt-2">
          <div className="flex gap-2">
            {icons.map((icon, index) => (
              <img
                className="w-4 h-4 object-cover"
                key={index}
                src={icon}
                alt={`icon-${index + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-xs">
            <p>{item.property_size}</p>
            <img
              className="w-4 h-4 object-cover"
              src={assets.squareIcon}
              alt="Size"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
