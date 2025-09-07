import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

const Team = () => {
  const { teamList } = useContext(StoreContext);
  return (
    <div className="flex flex-col items-center text-center py-10 px-4">
      <h1 className="text-4xl font-semibold font-poppins">Our Team</h1>
      <p className="text-xl md:text-2xl mt-2 font-light max-w-4xl">
        It is a long established fact that a reader will be distracted by the
        readable opposed to using 'Content here, content here', making it look
        like
      </p>
      <div className="flex flex-wrap justify-center mt-10 gap-6">
        {teamList.map((team, index) => (
          <div key={index} className="text-center  ">
            <img
              className="w-64   object-cover"
              src={team.image}
              alt={team.name}
            />
            <div className="bg-white shadow-md shadow-gray-300">
              <p className="text-2xl py-3 font-semibold">{team.name}</p>
              <span className="text-lg text-gray-600">{team.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
