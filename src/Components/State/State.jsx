import React, { useContext } from "react";
import { StoreContext } from "../../Context/StoreContext";
import Title from "../../Components/Title";
import StateCard from "./StateCard";
import { assets } from "../../assets/assets";

const State = () => {
  const { states, loadingStates, State_list } = useContext(StoreContext);

  return (
    <div className="container mx-auto mt-20 py-8 flex flex-col transition-all duration-200 px-[8%] md:px-[10%]">
      <div className="flex justify-between items-center mb-6">
        <Title title="Search by State" />
        <div className="flex justify-center items-center rounded-full border border-secondary-color cursor-pointer h-12 w-12 sm:h-14 sm:w-14  hover:bg-yellow-100">
          <img src={assets.next} alt="Next" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm: md:grid-cols-1 lg:grid-cols-3 gap-6 ">
        {loadingStates ? (
          <div className="col-span-3 text-center">Loading...</div>
        ) : (
          State_list.map((state, index) => {
            const matchedState = states.find((s) => s.id === state.id);
            return (
              <StateCard
                key={state.id}
                id={index}
                title={matchedState ? matchedState.name : ""}
                description={state.description}
                location={state.location}
                image={state.image}
                type={state.type_name}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default State;
