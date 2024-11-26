import React from "react";

const Transaction = () => {
  return (
    <div class="bg-white shadow-md rounded-lg p-4">
      <div class="flex items-center mb-4">
        <div class="w-10 h-10 rounded-full bg-yellow-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 10.5h18M7.5 9l4.5 4.5M7.5 15l4.5-4.5"
            />
          </svg>
        </div>
        <div class="ml-4">
          <p class="text-lg font-semibold">Deposit from my Card</p>
          <p class="text-sm text-gray-500">28 January 2021</p>
        </div>
        <div class="ml-auto text-red-500 font-semibold">- $850</div>
      </div>

      <div class="flex items-center mb-4">
        <div class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75c-3.34   
 0-6.248.947-8.568 2.475m7.548-2.475c3.34 0 6.248-.947 8.568-2.475m0 0l-4.5-4.5m4.5 4.5l4.5-4.5M12 18.75c-2.48 0-4.5-1.379-4.5-3.25 0-1.871 1.38-3.25 3.25-3.25 1.871 0 3.25 1.379 3.25 3.25 0 1.872-1.38 3.25-3.25 3.25z"
            />
          </svg>
        </div>
        <div class="ml-4">
          <p class="text-lg font-semibold">Deposit Paypal</p>
          <p class="text-sm text-gray-500">25 January 2021</p>
        </div>
        <div class="ml-auto text-green-500 font-semibold">+ $2,500</div>
      </div>

      <div class="flex items-center mb-4">
        <div class="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v13.5m0-13.5V3m0 0h-3m3 0h3M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div class="ml-4">
          <p class="text-lg font-semibold">Jemi Wilson</p>
          <p class="text-sm text-gray-500">21 January 2021</p>
        </div>
        <div class="ml-auto text-green-500 font-semibold">+ $5,400</div>
      </div>
    </div>
  );
};

export default Transaction;
