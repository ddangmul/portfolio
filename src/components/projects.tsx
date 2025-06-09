import { Project } from "@/lib/type";
import ProjectCard from "./project-card";
import { projects } from "@/lib/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-24 mt-20 px-4 md:px-6 lg:px-10 xl:px-60"
    >
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="flex flex-col gap-4">
        {projects.map((project: Project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
