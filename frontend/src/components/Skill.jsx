
import {
  Code2,
  PanelsTopLeft,
  Database,
  Wrench,
  BrainCircuit,
  ShieldCheck,
} from "lucide-react";

import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiRedis,
  SiApachekafka,
  SiVite,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Languages",
    description: "Programming fundamentals",
    icon: Code2,
    skills: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    description: "Building modern user interfaces",
    icon: PanelsTopLeft,
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend & Databases",
    description: "APIs, services and data",
    icon: Database,
    skills: ["Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma"],
  },
  {
    title: "DevOps & Tools",
    description: "Development and deployment",
    icon: Wrench,
    skills: ["Git", "GitHub", "Docker", "Render", "Vercel"],
  },
  {
    title: "AI & Architecture",
    description: "Building intelligent applications",
    icon: BrainCircuit,
    skills: ["LLM APIs", "RAG", "Embeddings", "Redis", "Kafka"],
  },
  {
    title: "Real-Time & Auth",
    description: "Secure, event-driven applications",
    icon: ShieldCheck,
    skills: ["JWT", "Socket.IO", "REST APIs", "RBAC"],
  },
];

const technologies = [
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "Redis", icon: SiRedis },
  { name: "Kafka", icon: SiApachekafka },
  { name: "Vite", icon: SiVite },
];

function SkillCard({ group }) {
  const Icon = group.icon;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04] sm:p-6">
      <div className="mb-5 flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 transition-colors group-hover:text-white">
          <Icon size={21} strokeWidth={1.7} />
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide text-gray-100">
            {group.title}
          </h3>
          <p className="mt-1 text-xs text-gray-500">
            {group.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-xs text-gray-400 transition-colors hover:border-white/20 hover:text-white"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-gray-500">
            03 / What I work with
          </p>


          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tech<span className="text-gray-500">.</span>
            <span className="text-gray-400">Arsenal</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Technologies I use to build, develop, and ship digital products.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>

        {/* Technology carousel */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] py-5">
          <div className="skills-marquee flex w-max">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center gap-10 px-5 sm:gap-14 sm:px-7"
              >
                {technologies.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    title={name}
                    className="flex min-w-16 flex-col items-center gap-2 text-gray-500 transition-colors hover:text-white"
                  >
                    <Icon size={25} />
                    <span className="whitespace-nowrap text-xs">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
