import { Project } from "@/public/types";
import Image from "next/image";
// import Link from "next/link";

const titleCapitalized = (title: string) => {
  return title
    ?.split(" ")
    .map((word) => {
      word = word.charAt(0).toUpperCase() + word.slice(1);
      return word;
    })
    .join(" ");
};

const sliceTech = (techArray: string[]) => techArray.slice(0, 3);

// TODO: Should add _id later
const ProjectCard = ({ imageUrl, techStack, title }: Project) => {
  return (
    <div
      // href={`/projects/${_id}`}
      className="flex flex-col gap-8 items-center outline-2 outline-[var(--bg-clr)] rounded-lg hover:outline-4  min-h-80 transition-[outline] duration-100 ease-out motion-reduce:transition-none"
    >
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={titleCapitalized(title)}
          width={300}
          height={180}
          className="object-cover h-[180px]"
        />
      )}

      <div className=" flex flex-col w-4/5 gap-4">
        <h3 className="text-[var(--bg-clr)] text-base font-bold uppercase self-start">
          {titleCapitalized(title)}
        </h3>
        <div className="flex flex-col gap-1">
          <p className="text-[var(--bg-clr)] font-bold uppercase text-sm self-start">
            Tech Stack:
          </p>
          <ul className="list-none flex gap-4">
            {sliceTech(techStack)?.map((tech) => (
              <li className="text-[var(--bg-clr)] text-sm" key={tech}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
