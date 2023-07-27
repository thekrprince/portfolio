import Image from "next/image";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Projects I have created</h2>
      {projectsData.map((project, idx) => {
        return (
          <div
            key={idx}
            className="flex flex-col items-center shadow-md m-4 bg-stone-800"
          >
            <Image
              src={project.image_url}
              alt={`image${idx}`}
              width="350"
              height="100"
            />
            <div className="p-2">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p className="flex justify-between text-blue-600">
                <a href={project.demo_link} target="_blank">
                  Live Link
                </a>
                <a href={project.github_url} target="_blank">
                  GitHub Link
                </a>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
