import { PROJECTS } from "../constants";

const Projects = () => (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-lg">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-t-lg mb-4"/>
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <hr className="border-gray-300 mb-4"/>
              <p className="text-neutral-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-lg font-medium mb-2">Stack</h4>
                <ul className="flex flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <li key={i} className="bg-neutral-900 text-indigo-800 px-2 py-1 rounded-lg mr-2 mb-2">{tech}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-between">
                <a href={project.visit} className="bg-indigo-500 text-white px-4 py-2 rounded-lg" target="_blank">Code</a>
                <a href={project.source} className="bg-indigo-500 text-white px-4 py-2 rounded-lg" target="_blank">Live</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default Projects;