import { Project } from "@/public/types";
import ProjectCard from "@/ui/ProjectCard";
import { getProjects } from "@/lib/projects";

function highlightProject(projects: Project[]) {
  return projects.filter((project) => project.isHighlight);
}

export async function getData() {
  const test = await getProjects();
  return test;
}

export default async function Home() {
  const projects = await getData();
  const projectToShow = highlightProject(projects);

  return (
    <div className="flex items-center justify-center gap-8 flex-col w-ful pb-8">
      <h3 className="text-2xl font-bold">Latest Projects</h3>

      <div className="flex gap-20 w-full justify-center">
        {projectToShow.map((project) => (
          <ProjectCard key={project._id} {...project} variant="home" />
        ))}
      </div>
    </div>
  );
}
