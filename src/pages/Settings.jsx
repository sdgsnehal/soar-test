import React, { useState } from "react";
import { Link } from "react-router-dom";

function Settings() {
  const [activeTab, setActiveTab] = useState("editProfile"); // Track the active tab

  const [name, setName] = useState("Charlene Reed");
  const [username, setUsername] = useState("Charlene Reed");
  const [email, setEmail] = useState("charlenereed@gmail.com");
  const [dateOfBirth, setDateOfBirth] = useState("1990-01-25");
  const [presentAddress, setPresentAddress] = useState(
    "San Jose, California, USA"
  );
  const [permanentAddress, setPermanentAddress] = useState(
    "San Jose, California, USA"
  );
  const [city, setCity] = useState("San Jose");
  const [postalCode, setPostalCode] = useState("45962");
  const [country, setCountry] = useState("USA");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", {
      name,
      username,
      email,
      dateOfBirth,
      presentAddress,
      permanentAddress,
      city,
      postalCode,
      country,
    });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-100">
        <li className="me-2">
          <button
            onClick={() => setActiveTab("editProfile")}
            className={`inline-block p-4 ${
              activeTab === "editProfile"
                ? "text-black border-b-2 border-black"
                : ""
            }`}
          >
            Edit Profile
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("preferences")}
            className={`inline-block p-4 ${
              activeTab === "preferences"
                ? "text-black border-b-2 border-black"
                : ""
            }`}
          >
            Preferences
          </button>
        </li>
        <li className="me-2">
          <button
            onClick={() => setActiveTab("security")}
            className={`inline-block p-4 ${
              activeTab === "security"
                ? "text-black border-b-2 border-black"
                : ""
            }`}
          >
            Security
          </button>
        </li>
      </ul>

      {activeTab === "editProfile" && (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="presentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Present Address
              </label>
              <textarea
                id="presentAddress"
                value={presentAddress}
                onChange={(e) => setPresentAddress(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24"
              />
            </div>
            <div>
              <label
                htmlFor="permanentAddress"
                className="block text-sm font-medium text-gray-700"
              >
                Permanent Address
              </label>
              <textarea
                id="permanentAddress"
                value={permanentAddress}
                onChange={(e) => setPermanentAddress(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full h-24"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700"
              >
                Postal Code
              </label>
              <input
                type="text"
                id="postalCode"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
            <div>
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      )}

      {activeTab === "preferences" && (
        <div className="mt-4">
          <h2 className="text-lg font-medium text-gray-700">Preferences</h2>
          <p>Preferences form content goes here.</p>
        </div>
      )}

      {activeTab === "security" && (
        <div className="mt-4">
          <h2 className="text-lg font-medium text-gray-700">Security</h2>
          <p>Security form content goes here.</p>
        </div>
      )}
    </div>
  );
}

export default Settings;
