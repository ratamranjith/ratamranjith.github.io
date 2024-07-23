import React, { useState, useEffect } from "react";
import axios from "axios";
import projectsData from "./projects/projectsData.js";

const fetchGitHubData = async (repo) => {
  const response = await axios.get(`https://api.github.com/repos/${repo}`);
  return response.data;
};

const Projects = () => {
  const [openModalId, setOpenModalId] = useState(null);
  const [repoData, setRepoData] = useState(null);

  useEffect(() => {
    fetchGitHubData("owner/repo-name").then(setRepoData);
  }, []);

  const openModal = (id) => {
    setOpenModalId(id);
  };

  const closeModal = () => {
    setOpenModalId(null);
  };

  const renderModalContent = (project) => {
    if (project.url) {
      return (
        <div className="text-center">
          <p>Click the link below to view the content:</p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {project.url}
          </a>
        </div>
      );
    }

    const Component = project.component;
    return Component ? <Component /> : <p>No component available</p>;
  };

  return (
    <div className="p-4 m-10 bg-[var(--bg-color)] text-[var(--text-color)] flex flex-wrap justify-center gap-2">
      {projectsData.map((project) => (
        <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-6">
          <div className="bg-violet-900 rounded-2xl antialiased text-white p-4 flex flex-col items-center">
            <img
              className="m-3 w-20 h-20 object-cover object-center rounded-lg shadow-md"
              src={project.image}
              alt={project.alt}
            />
            <h5 className="mb-1 text-sm font-medium text-white dark:text-lime-500">
              {project.title}
            </h5>
            <div className="flex flex-wrap mt-2 md:mt-4">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-indigo-800 text-white text-xs font-medium me-2 mb-2 px-2.5 py-0.5 rounded-sm dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </div>
            <br />
            <button
              onClick={() => openModal(project.id)}
              className="block w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Open App
            </button>
          </div>
        </div>
      ))}

      {openModalId !== null && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-75 animate-fadeIn">
          <div className="relative w-full max-w-4xl max-h-full mx-auto bg-white rounded-lg border border-indigo-600 shadow-lg animate-slideUp">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-black">
                {
                  projectsData.find((project) => project.id === openModalId)
                    .title
                }
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-black"
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
              {renderModalContent(
                projectsData.find((project) => project.id === openModalId)
              )}
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
  );
};

export default Projects;
