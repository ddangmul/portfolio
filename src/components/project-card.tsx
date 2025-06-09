"use client";

import { Project } from "@/lib/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProjectCard = ({ project }: { project: Project }) => {
  const router = useRouter();
  const handleClick = (title: string) => {
    router.push(`/${title}`);
  };
  return (
    <article
      className="space-y-10 hover:cursor-pointer mb-8"
      onClick={() => handleClick(project.title)}
    >
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-10">
        <div className="flex flex-col gap-3 p-2">
          <h3
            className={`text-3xl ${
              project.title === "HyangNang" ? "font-serif" : "font-bold"
            }`}
          >
            {project.title}
          </h3>
          <p>{project.description}</p>
          <div className="flex flex-wrap gap-2">
            <span className="bg-[#333333] text-white text-xs px-2 py-1 rounded-sm">
              Next.js
            </span>
            <span className="bg-[#454545] text-white text-xs px-2 py-1 rounded-sm">
              React
            </span>
            <span className="bg-[#6f6f6f] text-white text-xs px-2 py-1 rounded-sm">
              TypeScript
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.mainFeatures.map((value, index) => (
              <span
                key={`main-feature ${index}`}
                className="bg-[#efefef] text-sm px-2 py-1 rounded-sm"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-[300px] h-[150px] md:w-[400px] md:h-[200px] aspect-1/2">
          <Image
            src={project.image}
            fill
            alt={project.title}
            className="w-full object-cover"
          />
        </div>
      </div>
      <hr className="border-[#cdcdcd]"></hr>
    </article>
  );
};
export default ProjectCard;
