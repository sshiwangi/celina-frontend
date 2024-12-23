import React from 'react';

function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center sticky top-0 bg-secondary/50 border-b border-border backdrop-blur-md z-40 rounded-t-xl">
      <div className="flex flex-row gap-x-2 items-center my-4 pl-4">
        <div className="flex flex-col justify-center items-center bg-secondary rounded-lg p-1">
          <svg
            width="18.3594"
            height="20.4004"
            viewBox="0 0 18.3594 20.4004"
            fill="none"
            stroke="none"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-[20px] h-[20px] fill-icon/30"
          >
            <g>
              <rect
                height="20.4004"
                opacity="0"
                width="18.3594"
                x="0"
                y="0"
              ></rect>
              <path
                d="M17.207 13.3105C17.6465 13.3105 17.998 12.959 17.998 12.5293L17.998 7.87109C17.998 7.44141 17.6465 7.08008 17.207 7.08008C16.7578 7.08008 16.4258 7.44141 16.4258 7.87109L16.4258 12.5293C16.4258 12.959 16.7578 13.3105 17.207 13.3105Z"
                fillOpacity="0.85"
              ></path>
              <path
                d="M13.9258 18.2324C14.3652 18.2324 14.707 17.8809 14.707 17.4512L14.707 2.94922C14.707 2.51953 14.3652 2.1582 13.9258 2.1582C13.4668 2.1582 13.1348 2.51953 13.1348 2.94922L13.1348 17.4512C13.1348 17.8809 13.4668 18.2324 13.9258 18.2324Z"
                fillOpacity="0.85"
              ></path>
              <path
                d="M10.6348 15.2734C11.084 15.2734 11.4258 14.9316 11.4258 14.4922L11.4258 5.9082C11.4258 5.46875 11.084 5.11719 10.6348 5.11719C10.1855 5.11719 9.85352 5.46875 9.85352 5.9082L9.85352 14.4922C9.85352 14.9316 10.1855 15.2734 10.6348 15.2734Z"
                fillOpacity="0.85"
              ></path>
              <path
                d="M7.34375 20.4004C7.79297 20.4004 8.14453 20.0488 8.14453 19.6094L8.14453 0.791016C8.14453 0.351562 7.79297 0 7.34375 0C6.9043 0 6.57227 0.351562 6.57227 0.791016L6.57227 19.6094C6.57227 20.0488 6.9043 20.4004 7.34375 20.4004Z"
                fillOpacity="0.85"
              ></path>
              <path
                d="M4.0625 16.4648C4.51172 16.4648 4.85352 16.1133 4.85352 15.6738L4.85352 4.72656C4.85352 4.28711 4.51172 3.92578 4.0625 3.92578C3.62305 3.92578 3.28125 4.28711 3.28125 4.72656L3.28125 15.6738C3.28125 16.1133 3.62305 16.4648 4.0625 16.4648Z"
                fillOpacity="0.85"
              ></path>
              <path
                d="M0.771484 12.4707C1.23047 12.4707 1.57227 12.1191 1.57227 11.6797L1.57227 8.7207C1.57227 8.28125 1.23047 7.91992 0.771484 7.91992C0.332031 7.91992 0 8.28125 0 8.7207L0 11.6797C0 12.1191 0.332031 12.4707 0.771484 12.4707Z"
                fillOpacity="0.85"
              ></path>
            </g>
          </svg>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row gap-x-2 items-center">
            <span className="text-xl text-text font-bold">Phone Number MarketPlace</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;