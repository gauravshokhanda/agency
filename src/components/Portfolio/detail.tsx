"use client";
import React, { useState } from "react";

const projects = [
  {
    id: 1,
    title: "App Development",
    cards: [
      { id: 1, title: "App Project 1", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/FnP-Promotion-engine.webp" },
      { id: 2, title: "App Project 2", imageUrl: "https://bigohtech.com/wp-content/uploads/2022/12/Square_Yards.webp" },
    ],
  },
  {
    id: 2,
    title: "Business Analysis",
    cards: [
      { id: 1, title: "Business Analysis Project 1", imageUrl: "https://bigohtech.com/wp-content/uploads/2024/07/lufthansa-digital-transformation.webp" },
      { id: 2, title: "Business Analysis Project 2", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/Suncor-Petro-canada.webp" },
      { id: 3, title: "Business Analysis Project 3", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/Carwale.webp" },
    ],
  },
  {
    id: 3,
    title: "Web Development",
    cards: [
      { id: 1, title: "Web Project 1", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/FnP-Promotion-engine.webp" },
      { id: 2, title: "Web Project 2", imageUrl: "https://bigohtech.com/wp-content/uploads/2022/12/Square_Yards.webp" },
    ],
  },
  {
    id: 4,
    title: "UI/UX Design",
    cards: [
      { id: 1, title: "UI/UX Design Project 1", imageUrl: "https://bigohtech.com/wp-content/uploads/2024/07/lufthansa-digital-transformation.webp" },
      { id: 2, title: "UI/UX Design Project 2", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/Suncor-Petro-canada.webp" },
      { id: 3, title: "UI/UX Design Project 3", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/Carwale.webp" },
    ],
  },
  {
    id: 5,
    title: "Social Media Development",
    cards: [
      { id: 1, title: "Social Media Developmemt Project 1", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/FnP-Promotion-engine.webp" },
    ],
  },
  {
    id: 6,
    title: "Maintenance and Support",
    cards: [
      { id: 1, title: "Maintenance and Support Project 1", imageUrl: "https://bigohtech.com/wp-content/uploads/2024/07/lufthansa-digital-transformation.webp" },
      { id: 2, title: "Maintenance and Support Project 2", imageUrl: "https://bigohtech.com/wp-content/uploads/2023/03/Suncor-Petro-canada.webp" },
    ],
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectId) => {
    const project = projects.find((proj) => proj.id === projectId);
    setSelectedProject(project);
  };

  return (
    <div>
      <section className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase">Our Works</h2>
          <h1 className="text-white text-4xl font-bold mt-4">Completed Projects</h1>

          <div className="mt-10 flex justify-center">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectClick(project.id)}
                  className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-lg font-semibold transition-transform duration-300 transform hover:scale-110 hover:text-indigo-400 hover:shadow-lg"
                >
                  {project.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <section className="py-12 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-white font-semibold text-center text-3xl mb-8">{selectedProject.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selectedProject.cards.map((card) => (
                <div
                  key={card.id}
                  className="relative group border border-indigo-600 bg-gray-800 rounded-lg overflow-hidden"
                  style={{ height: '300px' }}
                >
                  <div
                    className="w-full h-full bg-cover bg-center transition duration-300 ease-in-out group-hover:blur-sm"
                    style={{ backgroundImage: `url(${card.imageUrl})` }}
                  ></div>
                  <div className="absolute inset-0 bg-transparent group-hover:bg-indigo-600/40 transition-all duration-300 ease-in-out"></div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                    <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
                    <p className="text-sm font-bold text-white mb-2">This is a description of the {card.title} project.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Portfolio;
