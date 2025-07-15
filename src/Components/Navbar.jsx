import React, { useState, useContext } from "react";
import { assets } from "../assets/assets";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { StoreContext } from "../Context/StoreContext";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { user, logoutUser } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };
  return (
    <>
      <nav
        aria-label="Global"
        className="max-sm:sticky top-0 z-40 mx-auto flex max-sm:backdrop-blur-sm max-sm:posit  items-center justify-between p-6 lg:px-20 h-24 "
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="sm:ml-10  p-1.5">
            <img alt="" src={assets.logo} className="h-7 sm:h-9 w-auto" />
          </Link>
        </div>
        <div className="flex justify-between gap-6">
          <Link to="/signup">
            {" "}
            <button
              type="button"
              className="sm:hidden bg-secondary-color rounded-full  px-2 h-12 w-full text-nowrap border border-gray-50"
            >
              Get Started
            </button>
          </Link>
          <div className="flex lg:hidden transition-all duration-300">
            {!mobileMenuOpen ? (
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-gray-700 transition-all duration-300"
              >
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-full p-2.5 text-secondary-color bg-white shadow transition-all duration-300"
              >
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            )}
          </div>
        </div>
        <PopoverGroup className="hidden items-center lg:flex lg:gap-x-5">
          <Link
            to="/listing"
            className="text-sm/6 px-2 font-semibold text-gray-900 hover:text-gray-400"
          >
            Listings
          </Link>

          {!user ? (
            <>
              <Link
                to="/about"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400 "
              >
                About us
              </Link>
              <Link
                to="/calculator"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
              >
                Loan Calculator
              </Link>
              <Link
                to="/contact"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
              >
                Contact us
              </Link>

              <Link
                to="/login"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
              >
                Log in
              </Link>
              <Link to="/signup">
                <button
                  type="button"
                  className="bg-secondary-color rounded-xl  px-2 h-12 w-36"
                >
                  Signup
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/application"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400 "
              >
                My Application
              </Link>
              <Link
                to="/payments"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
              >
                Payments
              </Link>
              <Link
                to="/loancalculator"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
              >
                Loan Calculator
              </Link>{" "}
              <Link
                to="/profile"
                className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
              >
                Raymond <i className=""></i> <img src={assets.profile} alt="" />
              </Link>
            </>
          )}
        </PopoverGroup>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-30" />
        <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto text-center bg-secondary-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
          <div className="mt-20 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-1">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/listing"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover hover:text-gray-900 text-gray-50"
                >
                  Listings
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                >
                  About us
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="calculator"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                >
                  Loan Calculator
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
                >
                  Contact us
                </Link>
                <Link to="/login">
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    type="button"
                    className=" rounded  p-1 text-black-500 font-bold hover:text-secondary-color focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden py-2 px-4 
                  bg-white"
                  >
                    Login / Signup
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </>
  );
};
export default Navbar;

// import React, { useState, useContext } from "react";
// import { assets } from "../assets/assets";
// import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// import { StoreContext } from "../Context/StoreContext";

// import { Link, useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const { user, logoutUser } = useContext(StoreContext);

//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logoutUser();
//     navigate("/login");
//   };

//   return (
//     <>
//       <nav
//         aria-label="Global"
//         className="max-sm:sticky top-0 z-40 mx-auto flex max-sm:backdrop-blur-sm max-sm:posit  items-center justify-between p-6 lg:px-20 h-24 "
//       >
//         <div className="flex lg:flex-1">
//           <Link to="/" className="sm:ml-10  p-1.5">
//             <img alt="" src={assets.logo} className="h-7 sm:h-9 w-auto" />
//           </Link>
//         </div>
//         <div className="flex justify-between gap-6">
//           <button
//             type="button"
//             className="sm:hidden bg-secondary-color rounded-full  px-2 h-12 w-full text-nowrap"
//           >
//             Get Started
//           </button>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(true)}
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-3 text-gray-700"
//             >
//               <Bars3Icon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//         </div>
//         <PopoverGroup className="hidden items-center lg:flex lg:gap-x-5">
//           <Link
//             to="/listing"
//             className="text-sm/6 px-2 font-semibold text-gray-900 hover:text-gray-400"
//           >
//             Listings
//           </Link>

//           {!user ? (
//             <>
//               <Link
//                 to="/About"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400 "
//               >
//                 About us
//               </Link>
//               <Link
//                 to="/Calculator"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
//               >
//                 Loan Calculator
//               </Link>
//               <Link
//                 to="/contact"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
//               >
//                 Contact us
//               </Link>

//               <Link
//                 to="/login"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
//               >
//                 Log in
//               </Link>
//               <Link to="/signup">
//                 <button
//                   type="button"
//                   className="bg-secondary-color rounded-xl  px-2 h-12 w-36"
//                 >
//                   Signup
//                 </button>
//               </Link>
//             </>
//           ) : (
//             <>
//               <Link
//                 to="/application"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400 "
//               >
//                 My Application
//               </Link>
//               <Link
//                 to="/payments"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
//               >
//                 Payments
//               </Link>
//               <Link
//                 to="/loancalculator"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
//               >
//                 Loan Calculator
//               </Link>{" "}
//               <Link
//                 to="/profile"
//                 className="text-sm/6 px-2 font-semibold text-gray-900  hover:text-gray-400"
//               >
//                 Raymond <i className=""></i> <img src={assets.profile} alt="" />
//               </Link>
//             </>
//           )}
//         </PopoverGroup>
//       </nav>
//       <Dialog
//         open={mobileMenuOpen}
//         onClose={setMobileMenuOpen}
//         className="lg:hidden"
//       >
//         <div className="fixed inset-0 z-30" />
//         <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full overflow-y-auto text-center bg-secondary-color px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 ">
//           <div className="flex items-center justify-center  mt-10">
//             <button
//               type="button"
//               onClick={() => setMobileMenuOpen(false)}
//               className="m-8 rounded-full p-2.5 text-secondary-color bg-white"
//             >
//               <XMarkIcon aria-hidden="true" className="size-6" />
//             </button>
//           </div>
//           <div className="mt-3 flow-root">
//             <div className="-my-6 divide-y divide-gray-500/10">
//               <div className="space-y-1">
//                 <Link
//                   onClick={() => setMobileMenuOpen(false)}
//                   to="/Listing"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover hover:text-gray-900 text-gray-50"
//                 >
//                   Listings
//                 </Link>
//                 <Link
//                   onClick={() => setMobileMenuOpen(false)}
//                   to="/About"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
//                 >
//                   About us
//                 </Link>
//                 <Link
//                   onClick={() => setMobileMenuOpen(false)}
//                   to="Calculator"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
//                 >
//                   Loan Calculator
//                 </Link>
//                 <Link
//                   onClick={() => setMobileMenuOpen(false)}
//                   to="/Contact"
//                   className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-bold hover:text-gray-900 text-gray-50"
//                 >
//                   Contact us
//                 </Link>

//                 <button
//                   onClick={() => setMobileMenuOpen(false)}
//                   type="button"
//                   className=" rounded  p-1 text-black-500 font-bold hover:text-secondary-color focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden py-2 px-4
//                   bg-white"
//                 >
//                   Login / Signup
//                 </button>
//               </div>
//             </div>
//           </div>
//         </DialogPanel>
//       </Dialog>
//     </>
//   );
// };
// export default Navbar;
