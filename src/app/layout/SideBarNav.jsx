"use client";

import React, { useState } from "react";
import Link from "next/link";

const itemsmenuNavigation = [
  {
    title: "Dashboard",
    link: "/",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
      >
        <g fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect width="19" height="19" x="2.5" y="2.5" rx="9.5"></rect>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m7.465 14.72l2.222-2.956a.907.907 0 0 1 1.207-.226l2.167 1.369a.907.907 0 0 0 1.243-.263l2.23-3.365"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: "Patients",
    link: "patients",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="1em"
        height="1em"
      >
        <path
          fill="currentColor"
          d="M24 21v2h1.748A11.96 11.96 0 0 1 16 28C9.383 28 4 22.617 4 16H2c0 7.72 6.28 14 14 14c4.355 0 8.374-2.001 11-5.345V26h2v-5z"
        ></path>
        <path
          fill="currentColor"
          d="m22.505 11.637l-5.989-3.5a1 1 0 0 0-1.008-.001l-6.011 3.5A1 1 0 0 0 9 12.5v7a1 1 0 0 0 .497.864l6.011 3.5A.96.96 0 0 0 16 24c.174 0 .36-.045.516-.137l5.989-3.5A1 1 0 0 0 23 19.5v-7a1 1 0 0 0-.495-.863m-6.494-1.48l4.007 2.343l-4.007 2.342l-4.023-2.342zM11 14.24l4 2.33v4.685l-4-2.33zm6 7.025v-4.683l4-2.338v4.683z"
        ></path>
        <path
          fill="currentColor"
          d="M16 2A13.95 13.95 0 0 0 5 7.345V6H3v5h5V9H6.252A11.96 11.96 0 0 1 16 4c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14"
        ></path>
      </svg>
    ),
  },
  {
    title: "Doctors",
    link: "doctors",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M14.5 5v8.5h-13V5m13 0L12 2.5H4L1.5 5m13 0h-13M6 10.5h4a1 1 0 1 0 0-2H5.5L7 7"
        ></path>
      </svg>
    ),
  },
  {
    title: "Appoinments",
    link: "appoinments",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="1em"
        height="1em"
      >
        <path
          fill="none"
          stroke="currentColor"
          d="M14.5 5v8.5h-13V5m13 0L12 2.5H4L1.5 5m13 0h-13M6 10.5h4a1 1 0 1 0 0-2H5.5L7 7"
        ></path>
      </svg>
    ),
  },
];

export default function SideBarNav(props) {
  return (
    <aside
      id="logo-sidebar"
      className={
        props.className +
        "  bg-gradient-to-r from-cyan-200 to-blue-300 left-0 z-[40] w-60 h-screen pt-10 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
      }
    >
      <div className="h-full px-3 pb-4 overflow-y-auto dark:bg-gray-800">
        <div className="flex flex-col gap-2">
          <h4 className="text-text-gray-light">Navigation</h4>
          <ul className="space-y-2 font-medium">
            {/* Navigation */}
            {itemsmenuNavigation.map((e, key) => (
              <li key={key}>
                <Link
                  href={e.link}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  {e.icon}
                  <span className="ms-3">{e.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <br />
        </div>
      </div>
    </aside>
  );
}
