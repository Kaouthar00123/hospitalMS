"use client";
import React, { Children } from "react";

function CardDash(props) {
  return (
    <div
      className={
        "flex flex-col justify-center items-center align-middle max-w-sm p-6 " +
        `bg-${props.color}-50 text-${props.color}-400` +
        " border border-gray-50 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      }
    >
      <div className="flex gap-3">
        {props.children}
        <div>
          <h5 className="mb-2 text-base font-normal tracking-tight dark:text-white">
            {props.title}
          </h5>
          <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">
            {props.price}
          </h5>
          <p className="text-base font-normal dark:text-gray-400">
            {props.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardDash;
