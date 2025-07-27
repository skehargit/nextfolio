import React from "react";
import { CardCarousel } from "@/components/ui/CardCarousel";

const images = [
  {
    src: "https://cdn.pixabay.com/photo/2024/09/21/15/07/eiffel-tower-9064240_1280.jpg",
    alt: "Image 1",
  },
  {
    src: "https://cdn.pixabay.com/photo/2022/10/22/13/41/paris-7539257_1280.jpg",
    alt: "Image 2",
  },
  {
    src: "https://cdn.pixabay.com/photo/2021/08/04/14/16/tower-6521842_1280.jpg",
    alt: "Image 3",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 px-8 bg-gray-50 dark:bg-gray-800">
    <h2 className="text-2xl font-bold mb-8">Projects</h2>

    <div className="pt-40">
      <CardCarousel
        images={images}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="p-6 bg-white dark:bg-gray-900 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">Project 1</h3>
        {/* Add project description here */}
      </div>
      {/* Project 2 */}
      <div className="p-6 bg-white dark:bg-gray-900 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">Project 2</h3>
        {/* Add project description here */}
      </div>
      {/* Project 3 */}
      <div className="p-6 bg-white dark:bg-gray-900 rounded shadow">
        <h3 className="font-semibold text-lg mb-2">Project 3</h3>
        {/* Add project description here */}
      </div>
    </div>
  </section>
);

export default Projects;
