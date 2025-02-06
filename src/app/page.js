"use client";

import React, { useEffect, useState } from "react";
import CardDash from "./components/CardDash";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Pie,
  PieChart,
  Bar,
  Label,
  Cell,
} from "recharts";

const resumedashboard = [
  {
    title: "Patients",
    price: "1005",
    details: "increse this period",
    color: "green",
  },
  {
    title: "Appointments",
    price: "245",
    details: "30% cancelled",
    color: "blue",
  },
  {
    title: "Total Revenue",
    price: "$735.00",
    details: "the period of 15/09/2024",
    color: "pink",
  },
];

const data = [
  {
    date: "22 Junary",
    "sales(DZD)": 4000,
  },
  {
    date: "2 Fubrary",
    "sales(DZD)": 3000,
  },
  {
    date: "12 Fubrary",
    "sales(DZD)": 2000,
  },
  {
    date: "22 Fubrary",
    "sales(DZD)": 2780,
  },
  {
    date: "2 March",
    "sales(DZD)": 1890,
  },
];

const aptStatus = [
  { status: "Completed", value: 20 },
  { status: "Pending", value: 45 },
  { status: "Cancelled", value: 37 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function Dashboard() {
  const [resumeinfo, setResumeinfo] = useState({
    nb_cmd: null,
    total_prices: null,
    balance: 5,
  });

  return (
    <div className="w-full h-full">
      <h2 className="py-3 px-1 my-5 text-left text-blue-400 rounded-md">
        Quick Statistics
      </h2>
      <div className="flex flex-col gap-5">
        <div id="resumedashboard" className="flex gap-[3%]">
          {resumedashboard.map((e, key) => (
            <CardDash
              key={key}
              title={e.title}
              details={e.details}
              price={e.price}
              color={e.color}
            >
              <div className="p-5 rounded-lg">
                {key == 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="2.5em"
                    height="2.5em"
                  >
                    <g
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path d="m16.649 9.326l.055-.24c.105-.446.277-1.102.632-1.748c.362-.658.923-1.325 1.803-1.764c.877-.437 1.976-.6 3.335-.42c1.5.2 4.513.696 7.175 2.05c2.677 1.362 5.185 3.705 5.185 7.607c0 2.016-.78 4.179-1.536 5.589c-.363.678-.794 1.326-1.226 1.675c-.099.08-.24.18-.415.25a8.004 8.004 0 0 1-15.05.738l-.024.004l-.355-.431L17 22l-.772.636l-.001-.002l-.002-.002l-.005-.007l-.017-.02a7 7 0 0 1-.247-.327a14 14 0 0 1-.61-.924c-.47-.778-1.037-1.886-1.4-3.179c-.362-1.293-.528-2.809-.148-4.373c.37-1.522 1.243-3.02 2.824-4.358zm1.68 12.638a6.003 6.003 0 0 0 11.564-.833l.113.038a2 2 0 0 1-.006-.17c0-1.655-.23-2.81-.444-3.53a7 7 0 0 0-.139-.416l-.041.002h-.04a11.5 11.5 0 0 1-2.232-.17c-1.717-.29-4.042-1.014-6.78-2.691q-.09.201-.18.453c-.196.555-.357 1.214-.496 1.91c-.123.613-.224 1.23-.32 1.808l-.037.228c-.103.62-.206 1.229-.326 1.67c-.21.766-.424 1.31-.636 1.7m-1.4-1.863a11 11 0 0 1-1.056-2.465c-.299-1.066-.409-2.22-.131-3.361c.27-1.11.923-2.277 2.266-3.383c.242-.164.352-.384.382-.443v-.001a2 2 0 0 0 .126-.337c.032-.114.067-.27.1-.41l.035-.157c.095-.403.218-.842.438-1.243c.214-.388.507-.72.943-.937c.438-.219 1.116-.369 2.178-.227c1.453.193 4.186.656 6.532 1.85c2.33 1.185 4.092 2.979 4.092 5.824c0 1.31-.44 2.8-.97 3.975c-.1-.766-.244-1.392-.392-1.888a8 8 0 0 0-.385-1.037a5 5 0 0 0-.19-.365l-.017-.027l-.006-.01l-.003-.005l-.002-.003l-.84.54l.84-.54l-.37-.574l-.662.133l-.014.003l-.097.013a5 5 0 0 1-.448.03a9.5 9.5 0 0 1-1.84-.144c-1.613-.272-3.983-1.013-6.862-2.93l-.7-.467l-.579.61c-.477.502-.801 1.187-1.038 1.854c-.242.685-.425 1.45-.572 2.184a53 53 0 0 0-.332 1.88l-.038.224c-.107.651-.194 1.148-.282 1.47q-.054.199-.106.364m13.881.422l.004-.002zm.004-.002l-.004.002z"></path>
                      <path d="M17.914 28.855c-.212-.422-.473-.943-.914-.842c-5.404 1.23-11 4.781-11 8.557V42h36v-5.43c0-2.974-3.472-5.809-7.587-7.48l-.005-.01l-.014-.027l-.033.016c-1.093-.44-2.231-.8-3.361-1.056c-.503-.115-1.023.577-1.25 1.01H18zm13.489 1.32q.656.182 1.301.407c.012.342-.014.746-.07 1.158a8 8 0 0 1-.272 1.26H31a1 1 0 0 0-.894.553l-1 2A1 1 0 0 0 29 36v2a1 1 0 0 0 1 1h2v-2h-1v-.764L31.618 35h2.764L35 36.236V37h-1v2h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-.106-.447l-1-2A1 1 0 0 0 35 33h-.566a11 11 0 0 0 .248-1.609c.975.461 1.881.99 2.666 1.562C39.27 34.355 40 35.667 40 36.57V40H8v-3.43c0-.903.73-2.215 2.652-3.617c.966-.705 2.119-1.343 3.355-1.871a10.2 10.2 0 0 0 .381 2.354l.008.028a3 3 0 1 0 1.956-.444l-.044-.144a8 8 0 0 1-.235-1.136a7 7 0 0 1-.07-1.171q.005-.126.015-.224q.18-.056.36-.107l.415.786h14.164zM16 37.016c.538 0 1-.44 1-1.015c0-.574-.462-1.015-1-1.015s-1 .44-1 1.015c0 .574.462 1.015 1 1.015"></path>
                    </g>
                  </svg>
                ) : key == 1 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 15 15"
                    width="2.5em"
                    height="2.5em"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      d="M3.5 0v5m8-5v5M3 7.5h3m6 0H9m-6 3h3m3 0h3m-10.5-8h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1Z"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="2.5em"
                    height="2.5em"
                  >
                    <path
                      fill="currentColor"
                      d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15c0-1.09 1.01-1.85 2.7-1.85c1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61c0 2.31 1.91 3.46 4.7 4.13c2.5.6 3 1.48 3 2.41c0 .69-.49 1.79-2.7 1.79c-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55c0-2.84-2.43-3.81-4.7-4.4"
                    ></path>
                  </svg>
                )}
              </div>
            </CardDash>
          ))}
        </div>
        <div id="charts" className="w-full h-full">
          <div
            id="earcningChart"
            className="w-full h-full border rounded-4 py-4 px-3 px-sm-4"
          >
            <br />
            {/* Earnings Chart */}
            <h3>Earnings History</h3>
            <div id="charts" className="flex flex-wrap gap-5">
              <div id="patients">
                <h4 className="mx-3">Patients Year by Year</h4>
                <ResponsiveContainer width={500} height={300}>
                  <AreaChart
                    data={data}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
                    <Area
                      type="monotone"
                      dataKey="sales(DZD)"
                      stroke="#008000"
                      fill="#cbddcb"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div id="appoinments-status">
                <h4 className="mx-3">Appointments Status</h4>
                <ResponsiveContainer width={400} height={400}>
                  <PieChart>
                    <Pie
                      data={aptStatus}
                      dataKey="value"
                      nameKey="status"
                      cx={200}
                      cy={150}
                      innerRadius={80}
                      outerRadius={100}
                    >
                      {...aptStatus.map((onedata, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                      <Label
                        content={{ labelText: "DATA", value: "100" }}
                        position="center"
                      />
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div id="appoinments">
                <h4 className="mx-3">Appointments Year by Year</h4>
                <ResponsiveContainer width={500} height={300}>
                  <BarChart width={200} height={150} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales(DZD)" fill="#cbddcb" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
