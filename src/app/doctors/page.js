"use client";

import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Modal,
  Rating,
  Textarea,
  TextInput,
} from "flowbite-react";
import React, { useRef, useState, useEffect } from "react";
import FilterInputs from "../components/FilterInputs";
import {
  deleteAxios,
  getAxios,
  patchAxios,
  postAxios,
} from "@/utils/axiosFetchData";

const doctorsUrl = "http://localhost:4002/doctors";

function orderElement(data, ordre) {
  var newdata = [...data];
  newdata.sort((e1, e2) => {
    if (e1.name < e2.name) return -1;
    else {
      if (e1.name > e2.name) return 1;
      else return 0;
    }
    return 1;
  });
  return newdata;
}

function searchInString(data, stringToSearch) {
  var newdata = [];

  data.forEach((element) => {
    if (element.name.includes(stringToSearch)) {
      newdata.push(element);
    }
  });
  return newdata;
}

const header = ["doctor ID & Name", "Number", "Email", "Speciality", "Service"];

const other = { "pagination-range": 10 };

export default function Doctors() {
  const [doctors, setdoctors] = useState([]);
  const [indexPagination, setindexPagination] = useState(1);
  const [openModalAdddoctor, setopenModalAdddoctor] = useState(false);

  const tableRef = useRef(null);
  const inputNameRef = useRef(null);
  const inputSearchRef = useRef(null);

  const [preview, setPreview] = useState();

  let ranges = 1;
  doctors.length % other["pagination-range"] == 0
    ? (ranges = doctors.length / other["pagination-range"])
    : (ranges = doctors.length / other["pagination-range"] + 1);

  useEffect(() => {
    getAxios(doctorsUrl).then((res) => {
      setdoctors(res.data);
    });
  }, []);

  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5">
      <h2 className="py-3 px-1 my-5 text-left bg-gradient-to-r from-cyan-200 to-blue-300 rounded-md">
        All doctors
      </h2>
      <div className="mx-auto max-w-screen-2xl lg:px-2">
        <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          {/* Search and filter */}
          <div className="w-full flex items-center justify-between py-3">
            <form id="table-search" className="max-w-md mx-3">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div
                className="relative"
                onClick={() => {
                  const valueToSearch = inputSearchRef.current.value;
                  const rowFilter = searchInString(doctors, valueToSearch);
                  setdoctors(rowFilter);
                }}
              >
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                  ref={inputSearchRef}
                />
              </div>
            </form>
            <div id="tablefilter" className="flex gap-2 mx-3">
              {/* Filter button */}
              <button className="flex flex-row justify-center items-center gap-2">
                <div className="inline">
                  <div className="inline dark:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 14 14"
                      width="1em"
                      height="1em"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5.5H.5l5 7v6l3-2v-4z"
                      ></path>
                    </svg>
                  </div>
                </div>
                <span className="dark:text-white">Filter</span>
              </button>
              <FilterInputs
                title="Last insert"
                options={["Last 1 day", "Last week", "Last month", "..."]}
              />
              <FilterInputs
                title="Category"
                options={["Laptops", "Phones", "Watches", "..."]}
              />
            </div>
          </div>

          {/* Header */}
          <div className="flex flex-col px-4 py-3 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
            <div className="flex items-center flex-1 space-x-4">
              <h5>
                <span className="text-gray-500">{"All doctors: "}</span>
                <span className="dark:text-white">{doctors.length} </span>
              </h5>
            </div>
            <div className="flex flex-col flex-shrink-0 space-y-3 md:flex-row md:items-center lg:justify-end md:space-y-0 md:space-x-3">
              <button
                type="button"
                className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                onClick={() => setopenModalAdddoctor(!openModalAdddoctor)}
              >
                <svg
                  className="h-3.5 w-3.5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  />
                </svg>
                Add new doctor
              </button>
              <button
                type="button"
                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                  />
                </svg>
                Update 1/250
              </button>
              <button
                type="button"
                className="flex items-center justify-center flex-shrink-0 px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                  />
                </svg>
                Export data
              </button>
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              ref={tableRef}
              className="w-full text-base text-left rtl:text-right text-gray-500 dark:text-gray-400 "
            >
              <thead className="sticky text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4 flex gap-3">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all"
                        type="checkbox"
                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label htmlFor="checkbox-all" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </th>
                  <th>
                    <div className="flex items-center">delete</div>
                  </th>
                  <th>
                    <div className="flex items-center">Save changes</div>
                  </th>
                  {header.map((head) => (
                    <th scope="col" className="px-6 py-3" key={head}>
                      <div
                        className="flex items-center"
                        onClick={() => {
                          setdoctors(orderElement(doctors, ""));
                        }}
                      >
                        {head}
                        <button
                          onClick={() => {
                            setdoctors(orderElement(doctors, ""));
                          }}
                        >
                          <svg
                            className="w-3 h-3 ms-1.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {doctors ? (
                  doctors
                    .slice(
                      indexPagination - 1,
                      indexPagination + other["pagination-range"] - 1
                    )
                    .map((doctor) => (
                      <tr
                        key={doctor.id}
                        className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {/* Checkbox of select */}
                        <td className="w-4 px-4 py-3">
                          <div className="flex items-center">
                            <input
                              id="checkbox-table-search-1"
                              type="checkbox"
                              className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="checkbox-table-search-1"
                              className="sr-only"
                            >
                              checkbox
                            </label>
                          </div>
                        </td>
                        {/* Delete */}
                        <td className="w-4 px-4 py-3">
                          <div className="flex items-center">
                            <button
                              onClick={() => {
                                deleteAxios(doctorsUrl + `/${doctor.id}`).then(
                                  (res) => {
                                    console.log("elment deleted: ", res.data);
                                    setdoctors(
                                      doctors.filter((e) => {
                                        return e.id != doctor.id;
                                      })
                                    );
                                  }
                                );
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 72 72"
                                width="1em"
                                height="1em"
                              >
                                <path
                                  fill="#FFF"
                                  d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"
                                ></path>
                                <path
                                  fill="#9b9b9a"
                                  d="M51 37v20.621L48.3 60H33z"
                                ></path>
                                <path fill="#FFF" d="M17 16h38v4H17z"></path>
                                <path
                                  fill="none"
                                  stroke="#000"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeMiterlimit="10"
                                  strokeWidth="2"
                                  d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                        {/* Save updates */}
                        <td className="w-4 px-4 py-3">
                          <div className="flex items-center">
                            <button
                              onClick={() => {
                                const value = inputNameRef.current.value;
                                patchAxios(doctorsUrl + `/${doctor.id}`, {
                                  name: value,
                                }).then((res) => {
                                  setdoctors(
                                    doctors.filter((e) => {
                                      if (e.id != doctor.id) {
                                        e.name = value;
                                      }
                                      return e;
                                    })
                                  );
                                });
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="1em"
                                height="1em"
                              >
                                <path
                                  fill="currentColor"
                                  d="M15.75 2A2.25 2.25 0 0 1 18 4.25v15.5A2.25 2.25 0 0 1 15.75 22h-7.5A2.25 2.25 0 0 1 6 19.75V4.25A2.25 2.25 0 0 1 8.25 2zm0 1.5h-7.5a.75.75 0 0 0-.75.75v15.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V4.25a.75.75 0 0 0-.75-.75M12 7.03a.75.75 0 0 1 .743.65l.007.1v6.712l.961-.961a.75.75 0 0 1 .977-.073l.084.073a.75.75 0 0 1 .073.976l-.073.085l-2.242 2.241l-.038.036l-.062.049l-.067.041l-.06.03l-.101.036l-.063.015l-.092.011h-.094l-.091-.011l-.097-.025l-.112-.047l-.076-.046l-.107-.089l-2.242-2.241a.75.75 0 0 1 .976-1.134l.085.073l.96.96l.001-6.71a.75.75 0 0 1 .55-.723l.098-.02z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </td>
                        {/* ID and Name */}
                        <th
                          scope="row"
                          className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white flex align-middle items-center gap-3"
                        >
                          <span>{doctor.id}</span>
                          <div className="w-[300px] h-[70px] text-wrap truncate flex align-middle items-center">
                            <input
                              type="text"
                              defaultValue={doctor["full name"]}
                              className="border-0"
                              ref={inputNameRef}
                            />
                          </div>
                        </th>
                        {/* Number */}
                        <td className="">
                          <span className="text-left items-start text-base font-medium rounded dark:bg-primary-900 dark:text-primary-300">
                            {doctor.number
                              ? doctor.number
                              : "Not defined yet !"}
                          </span>
                        </td>
                        {/* Email */}
                        <td className="">
                          <span className="text-left items-start text-base font-medium rounded dark:bg-primary-900 dark:text-primary-300">
                            {doctor.email ? doctor.email : "Not defined yet !"}
                          </span>
                        </td>
                        {/* Specality */}
                        <td className="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                          {doctor.speciality
                            ? doctor.speciality
                            : "Not defined yet !"}{" "}
                        </td>
                        {/* Service affected */}
                        <td
                          className={
                            "px-4 py-2 font-medium whitespace-nowrap dark:text-white "
                          }
                        >
                          {doctor.service
                            ? doctor.service
                            : "Not defined yet !"}
                        </td>
                      </tr>
                    ))
                ) : (
                  <p>Loading</p>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {doctors ? (
            <nav
              className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
              aria-label="Table navigation"
            >
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                {"Showing "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {indexPagination.toString() +
                    " - " +
                    (indexPagination + other["pagination-range"] - 1 <=
                    doctors.length
                      ? (
                          indexPagination +
                          other["pagination-range"] -
                          1
                        ).toString()
                      : doctors.length.toString())}
                </span>
                {" of "}
                <span className="font-semibold text-gray-900 dark:text-white">
                  {doctors.length}
                </span>
              </span>
              <ul className="inline-flex items-stretch -space-x-px">
                {/* Previous */}
                <li>
                  <button
                    className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {
                      let val = indexPagination - other["pagination-range"];
                      if (val > 0) setindexPagination(val);
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                {/* Ranges */}
                {Array.from({ length: ranges }).map((_, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      {index + 1}
                    </a>
                  </li>
                ))}
                {/* Next */}
                <li>
                  <button
                    className="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    onClick={() => {
                      let val = indexPagination + other["pagination-range"];
                      if (val <= doctors.length) setindexPagination(val);
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>

      {/* Add new element */}
      <Modal
        show={openModalAdddoctor}
        size="md"
        onClose={() => setopenModalAdddoctor(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
              Add New doctor
            </h3>
            <form method="post">
              <div id="data" className="flex flex-col gap-3">
                <div>
                  <Label className="mb-2 block" htmlFor="email" value="Name" />
                  <TextInput
                    id="doctor-name"
                    name="name"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="file" value="doctor photo" />
                  </div>
                  <FileInput
                    id="imagefileUpload"
                    name="img-url"
                    helperText="A profile picture is useful to confirm your are logged into your account"
                    accept="image/*"
                    multiple
                    onChange={(event) => {
                      const file = event.target.files[0];
                      if (file && file.type.substring(0, 5) === "image") {
                        setImage(file);
                      } else {
                        setImage(null);
                      }
                    }}
                  />

                  <img src={preview} />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Description" />
                  </div>
                  <Textarea
                    id="doctor-description"
                    name="Description"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                  />
                </div>
                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Other details" />
                  </div>
                  <Textarea
                    id="doctor-details"
                    name="details"
                    placeholder="Leave a comment..."
                    required
                    rows={4}
                  />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Quantity stock" />
                  </div>
                  <TextInput
                    id="stock"
                    name="stock"
                    type="number"
                    placeholder="Leave a comment..."
                    required
                  />
                </div>

                <div className="max-w-md">
                  <div className="mb-2 block">
                    <Label htmlFor="comment" value="Sizes" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="check-op1"
                          name="check-op1"
                          value={"32GB"}
                          defaultChecked={true}
                        />
                        <Label htmlFor="remember">{"32GB"}</Label>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Checkbox
                          id="check-op2"
                          name="check-op2"
                          value={"16GB"}
                        />
                        <Label htmlFor="remember">{"16GB"}</Label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="actions"
                className="my-5 flex justify-between items-center"
              >
                <Button
                  className="bg-green-300"
                  type="submit"
                  // onClick={() => setopenModalAdddoctor(false)}
                >
                  Add this doctor
                </Button>
                <Button
                  className="bg-red-300"
                  onClick={() => setopenModalAdddoctor(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
