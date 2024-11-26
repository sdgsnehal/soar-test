import React from "react";
import { GrSend } from "react-icons/gr";

function TeamMember({ name, role, imageUrl }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={imageUrl} alt={name} className="w-12 h-12 rounded-full" />
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm text-blue-400">{role}</p>
    </div>
  );
}

function PaymentForm() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <TeamMember
            name="Livia Bator"
            role="CEO"
            imageUrl="https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamMember
            name="Randy Press"
            role="Director"
            imageUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamMember
            name="Workman"
            role="Designer"
            imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>

      <div
        className="flex   
 justify-between items-center"
      >
        <div className="flex-1 flex-col ">
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700"
          >
            Write Amount
          </label>
          <div className="flex flex-row ">
            <input
              type="text"
              id="amount"
              placeholder="0.00"
              className="mt-1 p-2 border border-r-0 rounded-l-full w-full"
            />

            <button className="bg-gray-800 text-white px-4 py-2  hover:bg-gray-900 border rounded-full w-48 flex flex-row justify-center">
              Send <GrSend className=" h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
