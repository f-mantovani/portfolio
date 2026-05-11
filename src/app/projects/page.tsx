import { Project } from "@/public/types";
import ProjectCard from "@/ui/ProjectCard";
import { getProjects } from "@/lib/projects";

export async function getData() {
  const test = await getProjects();
  return test;
}

export default async function ProjectList() {
  const projects = await getData();

  return (
    <div className="flex items-center gap-8 flex-col w-ful pb-8 pt-20 overflow-y-auto scrollbar">
      <div className="flex gap-10 justify-center flex-col">
        {projects.map((project: Project) => (
          <ProjectCard key={project._id} {...project} variant="projects" />
        ))}
      </div>
    </div>
  );
}
