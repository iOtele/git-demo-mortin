import React, { useState, useContext, useEffect } from "react";
import UpdatePasswordForm from "./UpdatePasswordForm";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

const MyProfile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "",
  });
  const [successMsg, setSuccessMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const { currentUser, updateUserProfile } = useContext(StoreContext);

  useEffect(() => {
    if (currentUser) {
      setProfile({
        firstName: currentUser.first_name || "",
        lastName: currentUser.last_name || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        countryCode: currentUser.countryCode || "+234",
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    setSuccessMsg(null);
    setErrorMsg(null);
    try {
      await updateUserProfile(currentUser.uid, profile);
      setSuccessMsg("Profile updated successfully!");
      console.log("Profile saved", profile);
    } catch (err) {
      setErrorMsg(err.message || "Failed to update profile.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col ">
      <div className="bg-secondary-color sm:flex justify-center items-center p-4 w-full hidden ">
        <div className="flex items-center gap-8 max-w-5xl text-lg font-medium">
          <img src={assets.iconInfo} alt={assets.iconInfo} className="w-10" />
          <p>
            You are a few steps away from completely setting up your Mortin
            account
          </p>
          <Link to="/verification">
            <button className="bg-white px-4 py-2 rounded-md">
              Start Verification
            </button>
          </Link>
        </div>
      </div>

      <div className="pt-6 flex flex-col  justify-start md:px-2%">
        <h1 className="text-4xl font-medium pb-4 pt-4 pl-12">My Profile</h1>
        <div className="w-full max-w-4xl my-8 p-6 bg-white rounded-lg shadow-lg mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 justify-center sm:items-end sm:justify-start">
              <img
                src={currentUser?.avatar || assets.profile}
                alt="Profile"
                className="w-48 h-48 rounded-full object-cover"
              />
              <div className="sm:flex  gap-2 hidden ">
                <button className=" text-gray-700 text-xl  px-4 py-1 rounded">
                  Change Photo
                </button>
                <button className=" text-gray-700 text-xl px-4 py-1 rounded">
                  Remove Photo
                </button>
              </div>
            </div>

            <form className="flex flex-col gap-4 mx-auto sm:mx-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
                <label className="flex flex-col text-lg font-medium">
                  First name
                  <input
                    type="text"
                    name="firstName"
                    value={profile.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    className="border rounded p-2 mt-1 max-w-[342px]"
                  />
                </label>
                <label className="flex flex-col text-lg font-medium">
                  Last name
                  <input
                    type="text"
                    name="lastName"
                    value={profile.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="border rounded p-2 mt-1 max-w-[342px]"
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <label className="flex flex-col text-lg font-medium">
                  Email address
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Email address"
                    className="border rounded p-2 mt-1 max-w-[342px]"
                  />
                </label>
                <label className="flex flex-col text-lg font-medium ">
                  Phone number
                  <div className="flex ">
                    <input
                      type="text"
                      name="countryCode"
                      value={profile.countryCode}
                      onChange={handleChange}
                      className="border rounded-l p-2 w-16"
                      placeholder="+234"
                    />
                    <input
                      type="text"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="border rounded-r p-2 max-w-[280px] w-full"
                    />
                  </div>
                </label>
              </div>

              {successMsg && (
                <div className="text-green-600 font-medium">{successMsg}</div>
              )}
              {errorMsg && (
                <div className="text-red-600 font-medium">{errorMsg}</div>
              )}

              <div className="flex justify-between flex-col gap-6 sm:flex-row mt-6">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="bg-gray-200 text-gray-600 px-8 py-3 rounded text-sm font-semibold cursor-pointer"
                >
                  Change Password
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="bg-yellow-500 text-gray-800 px-6 py-3 rounded text-lg font-semibold"
                  disabled={loading}
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <UpdatePasswordForm
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default MyProfile;

// import React, { useState, useContext } from "react";
// import UpdatePasswordForm from "./UpdatePasswordForm";
// import { assets } from "../assets/assets";
// import { StoreContext } from "../Context/StoreContext";

// const MyProfile = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [profile, setProfile] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     countryCode: "",
//   });
//   const { currentUser, updateUserProfile, setCurrentUser, setAuthError } =
//     useContext(StoreContext);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProfile({
//       ...profile,
//       [name]: value,
//     });
//   };

//   const handleSave = async () => {
//     try {
//       await updateUserProfile(currentUser.uid, profile);

//       console.log("Profile saved", profile);
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return (
//     <div className="flex flex-col ">
//       <div className="bg-secondary-color sm:flex justify-center items-center p-4 w-full hidden ">
//         <div className="flex items-center gap-8 max-w-5xl text-lg font-medium">
//           <img src={assets.iconInfo} alt="Info" className="w-10" />
//           <p>
//             You are a few steps away from completely setting up your Mortin
//             account
//           </p>
//           <button className="bg-white px-4 py-2 rounded-md">
//             Start Verification
//           </button>
//         </div>
//       </div>
//       <div className="pt-6 flex flex-col  justify-start md:px-2%">
//         <h1 className="text-4xl font-medium pb-4 pt-4 pl-12">My Profile</h1>
//         <div className="w-full max-w-4xl my-8 p-6 bg-white rounded-lg shadow-lg mx-auto">
//           <div className="flex flex-col gap-6">
//             <div className="flex gap-6 justify-center sm:items-end sm:justify-start">
//               <img
//                 src={assets.profile}
//                 alt="Profile"
//                 className="w-48 h-48 rounded-full object-cover"
//               />
//               <div className="sm:flex  gap-2 hidden ">
//                 <button className=" text-gray-700 text-xl  px-4 py-1 rounded">
//                   Change Photo
//                 </button>
//                 <button className=" text-gray-700 text-xl px-4 py-1 rounded">
//                   Remove Photo
//                 </button>
//               </div>
//             </div>
//             <form className="flex flex-col gap-4 mx-auto sm:mx-0">
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
//                 <label className="flex flex-col text-lg font-medium">
//                   First name
//                   <input
//                     type="text"
//                     name="firstName"
//                     value={profile.firstName}
//                     onChange={handleChange}
//                     placeholder="First name"
//                     className="border rounded p-2 mt-1 max-w-[342px]"
//                   />
//                 </label>
//                 <label className="flex flex-col text-lg font-medium">
//                   Last name
//                   <input
//                     type="text"
//                     name="lastName"
//                     value={profile.lastName}
//                     onChange={handleChange}
//                     placeholder="Last name"
//                     className="border rounded p-2 mt-1 max-w-[342px]"
//                   />
//                 </label>
//               </div>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <label className="flex flex-col text-lg font-medium">
//                   Email address
//                   <input
//                     type="email"
//                     name="email"
//                     value={profile.email}
//                     onChange={handleChange}
//                     placeholder="Email address"
//                     className="border rounded p-2 mt-1 max-w-[342px]"
//                   />
//                 </label>
//                 <label className="flex flex-col text-lg font-medium ">
//                   Phone number
//                   <div className="flex ">
//                     <input
//                       type="text"
//                       name="countryCode"
//                       value={profile.countryCode}
//                       onChange={handleChange}
//                       className="border rounded-l p-2 w-16"
//                       placeholder="+234"
//                     />
//                     <input
//                       type="text"
//                       name="phone"
//                       value={profile.phone}
//                       onChange={handleChange}
//                       placeholder="Phone number"
//                       className="border rounded-r p-2 max-w-[280px] w-full

//                         "
//                     />
//                   </div>
//                 </label>
//               </div>
//               {successMsg && (
//                 <div className="text-green-600 font-medium">{successMsg}</div>
//               )}
//               {errorMsg && (
//                 <div className="text-red-600 font-medium">{errorMsg}</div>
//               )}
//               <div className="flex justify-between flex-col gap-6 sm:flex-row mt-6">
//                 <button
//                   type="button"
//                   onClick={() => setIsModalOpen(true)}
//                   className="bg-gray-200 text-gray-600 px-8 py-3 rounded text-sm font-semibold cursor-pointer"
//                 >
//                   Change Password
//                 </button>
//                 <button
//                   type="button"
//                   onClick={handleSave}
//                   className="bg-yellow-500 text-gray-800 px-6 py-3 rounded text-lg font-semibold"
//                   disabled={loading}
//                 >
//                   {loading ? "Saving..." : "Save Changes"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//       <UpdatePasswordForm
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default MyProfile;
