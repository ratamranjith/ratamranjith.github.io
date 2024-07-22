// src/Projects.jsx

import React, { useState } from "react";
import projectsData from "./projects/projectsData.js";

const Projects = () => {
  const [openModalId, setOpenModalId] = useState(null);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <div className="p-4 bg-[var(--bg-color)]  justify-center z-50 text-[var(--text-color)] transition-colors duration-700 ease-in-out">
      <h2>Projects</h2>

      {projectsData.map((project) => (
        <div
          key={project.id}
          className="max-w-56 bg-white border border-gray-900  rounded-lg shadow-2xl dark:bg-primary dark:border-tertiary mb-2"
        >
          <div className="flex flex-col items-center pb-2">
            <img
              className="w-10 h-12 rounded-md shadow-lg"
              src={project.image}
              alt={project.alt}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {project.title}
            </h5>
            <div className="flex mt-2 md:mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-800 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <br />
            <button
              onClick={() => openModal(project.id)}
              className="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Open App
            </button>
          </div>

          {openModalId === project.id && (
            <div
              className="fixed inset-0 flex items-center justify-center z-50 w-full pt-40"
              style={{ display: openModalId === project.id ? "block" : "none" }}
            >
              <div className="relative w-full max-w-4xl max-h-full mx-auto bg-white rounded-lg border-indigo-600 shadow ">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <button
                    type="button"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={closeModal}
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <project.component />
                </div>
                <div className="flex items-center p-4 md:p-5 space-x-3 rtl:space-x-reverse border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button
                    onClick={closeModal}
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
