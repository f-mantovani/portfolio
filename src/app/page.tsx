import { Project } from "@/public/types";
import ProjectCard from "@/ui/ProjectCard";
import { promises as fs } from "node:fs";

function highlightProject(projects: Project[]) {
  return projects.filter((project) => project.isHighlight);
}

export async function getData() {
  const projects = await fs.readFile(
    process.cwd() + "/src/public/project_data.json",
    "utf8",
  );
  return JSON.parse(projects);
}

export default async function Home() {
  const projects = await getData();
  const projectToShow = highlightProject(projects);
  return (
    <div className="flex items-center justify-center gap-8 flex-col w-ful pb-8">
      <h3 className="text-2xl font-bold">Latest Projects</h3>

      <div className="flex gap-20 w-full justify-center">
        {projectToShow.map((project) => (
          <ProjectCard key={project._id} {...project} />
        ))}
      </div>
    </div>
  );
}
