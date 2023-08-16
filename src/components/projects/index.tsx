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
            className="flex flex-col items-center shadow-md m-4 border-2 border-rose-500"
          >
            <Image
              src={project.image_url}
              alt={`image${idx}`}
              width="350"
              height="100"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p>{project.description}</p>
              <p className="flex justify-between mt-2">
                <a
                  href={project.demo_link}
                  target="_blank"
                  className="text-pink-400 hover:underline hover:decoration-2 hover:underline-offset-2"
                >
                  Live Link
                </a>
                <a
                  href={project.github_url}
                  target="_blank"
                  className="text-pink-400 hover:underline hover:decoration-2 hover:underline-offset-2"
                >
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
