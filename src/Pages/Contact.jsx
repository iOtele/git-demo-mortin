import React, { useState } from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
  };

  const ContactDetail = ({ icon, title, details }) => (
    <div className="flex flex-col items-center text-center sm:border-r last:border-r-0 pr-6">
      <img className="w-20 mb-2" src={icon} alt={title} />
      <span className="text-sm font-semibold">{title}</span>
      {details.map((detail, index) => (
        <p key={index} className="text-lg font-medium">
          {detail}
        </p>
      ))}
    </div>
  );

  return (
    <>
      <div className="flex flex-col items-center bg-contain bg-center p-12 text-black bg-faded-secondary bg-[url('/bgContact.png')] min-h-[60vh]">
        <h1 className="text-4xl font-semibold mb-12">Contact us</h1>
        <div className="flex space-x-8 gap-y-10 flex-col sm:flex-row ">
          <ContactDetail
            icon={assets.addressIcon}
            title="ADDRESS"
            details={["4 Mambolo Street, Wuse Zone 2,", "Abuja 900288"]}
          />
          <ContactDetail
            icon={assets.emailIcon}
            title="EMAIL ADDRESS"
            details={["Info@Mortln.com", "Business@Mortln.com"]}
          />
          <ContactDetail
            icon={assets.customerCare}
            title="CUSTOMER CARE"
            details={[
              "Front desk:+234-817-4300-051",
              "Operations:+234-908-7302-031",
            ]}
          />
        </div>
      </div>
      <div
        className="container mx-auto mt-20 py-8 flex  transition-all duration-200 px-[8%] md:px-[10%] justify-between
      sm:px-[12%]  w-full flex-col sm:flex-row
    "
      >
        <Title title="Leave Us A Message" />
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col md:w-[284px]">
              <label htmlFor="name" className="text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-700 font-medium">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Eligibility"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-gray-700 font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Johndoe@mortln.com"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray-700 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message here..."
              rows="5"
              className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 resize-none"
            />
          </div>
          <div
            className="flex
        justify-end "
          >
            <button
              type="submit"
              className=" md:w-[200px] bg-secondary-color text-black font-medium p-2 rounded-lg hover:bg-yellow-300 text-xl transition "
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
