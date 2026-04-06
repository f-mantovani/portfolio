import ClickableLink from "@/ui/ClickableLink";
import Image from "next/image";
import { links } from "@/public/links";

const hardSkills = [
  "HTML5, CSS & Responsive Web Design",
  "Frontend Development: ReactJS, Next, Tailwind, CSS-in-JS",
  "Backend Development: Node.js & ExpressJS",
  "Integration of 3rd party services (REST APIs)",
  "Non-Relational database, MongoDB",
  "Hosting, Agile Methodologies, Git and GitHub",
  "Software testing with Jest",
];
const softSkills = [
  "Teamwork",
  "Communication",
  "Problem Solving",
  "Feedback oriented",
  "Teaching",
];

function SkillTitle({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <h3 className={`uppercase mb-2 text-[1.1rem]  font-bold ${className}`}>
      {children}
    </h3>
  );
}

function SkillItem({ children }: { children: string }) {
  return <li className="ms-4 mb-2">{children}</li>;
}

export default function About() {
  const gitHub = links[1];
  const codeWars = links[3];
  const linkedIn = links[0];
  const mail = links[2];
  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-16">
      <section className="flex gap-20 items-center">
        <Image
          src={"/assets/profile-pic.png"}
          width={300}
          height={300}
          alt="Profile picture for Felipe Leite Mantovani"
          style={{
            objectFit: "cover",
            borderRadius: "999px",
            aspectRatio: "1/1",
          }}
        />
        <div className="flex flex-col gap-8 max-w-[720px]">
          <p className="text-xl">
            I&apos;m a full-stack developer experienced in learning and
            collaborating in dynamic and rapidly changing environments.
          </p>
          <p className="text-xl">
            Working as a freelancer in software development for the past year,
            I&apos;m currently looking for a company where I can apply my skills
            and accelerate my learning path!
          </p>
        </div>
      </section>

      <section className="flex gap-24 justify-between w-full">
        <div className="flex flex-col gap-4 mb-12">
          <SkillTitle>Check my programming Skills</SkillTitle>
          <ClickableLink
            img={gitHub.img}
            link={gitHub.link}
            alt={gitHub.alt}
            width={20}
            height={20}
          >
            github.com/f-mantovani
          </ClickableLink>
          <ClickableLink
            img={codeWars.img}
            link={codeWars.link}
            alt={codeWars.alt}
            width={20}
            height={20}
          >
            codewars.com/users/F-Mantovani
          </ClickableLink>

          <SkillTitle className="mt-8">Get in touch</SkillTitle>
          <ClickableLink
            img={mail.img}
            link={mail.link}
            alt={mail.alt}
            height={20}
            width={20}
          >
            felipe.mantovani@outlook.com
          </ClickableLink>
          <ClickableLink
            img={linkedIn.img}
            alt={linkedIn.alt}
            link={linkedIn.link}
            height={20}
            width={20}
          >
            linkedin.com/f-mantovani
          </ClickableLink>
        </div>
        <div>
          <SkillTitle>Technologies</SkillTitle>
          <ul className="list-inside list-disc">
            {hardSkills.map((skill: string, index: number) => (
              <SkillItem key={index + skill}>{skill}</SkillItem>
            ))}
          </ul>
        </div>
        <div>
          <SkillTitle>Soft Skills</SkillTitle>
          <ul className="list-disc list-inside">
            {softSkills.map((skill: string, index: number) => (
              <SkillItem key={index + skill}>{skill}</SkillItem>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
