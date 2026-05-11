import { getProject, getProjects } from "@/lib/projects";
import linkIcon from "../../../../public/assets/link.png";
import { notFound } from "next/navigation";
import Image from "next/image";

export const revalidate = 21600;

const Link = ({ children }: { children: string }) => {
  return (
    <div className="flex items-center hover:underline hover:decoration-blue-700 ">
      <Image src={linkIcon} alt="link-icon" className="h-6 w-6" />
      <a className="text-blue-700" href={children}>
        {children}
      </a>
    </div>
  );
};

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = await getProject(id);

  if (!project) {
    return notFound();
  }
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <div className="flex flex-col justify-center items-center gap-4">
        {project.imageUrl && (
          <div className="img-holder">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={410}
              height={410}
              className="h-auto rounded-lg"
            />
          </div>
        )}

        <p className="max-w-[60ch]">{project.description}</p>
      </div>

      <div className="flex flex-col gap-2">
        {project.frontendLink && (
          <div className="flex flex-col gap-1.5">
            <h4> FRONT-END REPO </h4>
            <Link>{project.frontendLink}</Link>
          </div>
        )}

        {project.backendLink && (
          <div className="flex flex-col gap-1.5">
            <h4> BACK-END REPO </h4>
            <Link>{project.backendLink}</Link>
          </div>
        )}

        {project.liveAppLink && (
          <div className="flex flex-col gap-1.5">
            <h4> LIVE </h4>
            <Link>{project.liveAppLink}</Link>
          </div>
        )}

        <div className="flex flex-col gap-1.5">
          <h4>TECH STACK:</h4>
          <ul>
            {project.techStack.map((tech: string) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({ id: project._id.toString() }));
}
