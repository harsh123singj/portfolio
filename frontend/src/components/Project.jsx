
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    name: "TicketsInSeconds",
    category: "BOOKING PLATFORM",
    description:
      "A ticket booking platform focused on event discovery, seat management, and reliable booking workflows.",
    features: ["React", "PostgreSQL", "Redis", "Kafka"],
    image: "/Projects/movie.png",
    imageAlt: "TicketsInSeconds event booking interface",
    liveUrl: "https://ticket-in-second-se8q.vercel.app/",
    githubUrl: "https://github.com/harsh123singj/TicketInSecond-",
  },
  {
    number: "02",
    name: "Smart Vehicle Platform",
    category: "VEHICLE SERVICE MANAGEMENT",
    description:
      "A vehicle service operations platform featuring role-based access control, real-time alerts, journey tracking, queues, and service-bay assignments.",
    features: ["Node.js", "Prisma", "PostgreSQL", "Socket.IO"],
    image: "/Projects/Vehicle.png",
    imageAlt: "Smart Vehicle station operations dashboard",
    liveUrl: "https://vehicle-service-station-u9i9-1vbu6c3fj-harsh-e29d.vercel.app/",
    githubUrl: "https://github.com/harsh123singj/vehicle-service-station",
  },
  {
    number: "03",
    name: "SmartLink",
    category: "URL MANAGEMENT",
    description:
      "A URL shortener with custom aliases, click tracking, link management, and expiration controls.",
    features: ["React", "Node.js", "PostgreSQL", "Prisma"],
    image: "/Projects/smartLink.png",
    imageAlt: "SmartLink URL management dashboard",
    liveUrl: "https://smartlink-url-shortener.vercel.app/",
    githubUrl:
      "https://github.com/harsh123singj/smartlink-url-shortener",
  },
  {
    number: "04",
    name: "DocTalk AI",
    category: "AI & DOCUMENTS",
    description:
      "An AI-powered document analyzer that helps users manage documents and ask questions about their document content.",
    features: ["React", "AI", "Document Analysis"],
    image: "/Projects/Doctalk.png",
    imageAlt: "DocTalk AI document assistant dashboard",
    liveUrl: "https://doc-talk-ai-red.vercel.app/",
    githubUrl: "https://github.com/harsh123singj/DocTalk-AI",
  },
];

function ProjectRow({ project, index }) {
  const imageFirst = index % 2 === 0;

  const image = (
    <a
      href={project.liveUrl || undefined}
      target={project.liveUrl ? "_blank" : undefined}
      rel={project.liveUrl ? "noreferrer" : undefined}
      aria-label={`Open ${project.name} live demo`}
      onClick={(event) => {
        if (!project.liveUrl) event.preventDefault();
      }}
      className={`group relative block min-w-0 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] ${
        project.liveUrl ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.025]"
      />

      {project.liveUrl && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-md">
            View Live Demo
            <ExternalLink size={15} />
          </span>
        </div>
      )}
    </a>
  );

  const content = (
    <div className="flex min-w-0 flex-col justify-center py-2">
      <p className="mb-3 text-xs font-medium tracking-[0.2em] text-white/40">
        {project.number}
        <span className="mx-2">/</span>
        {project.category}
      </p>

      <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
        {project.name}
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.features.map((feature) => (
          <span
            key={feature}
            className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/65"
          >
            {feature}
          </span>
        ))}
      </div>

      {project.githubUrl && (
        <div className="mt-6">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-white"
          >
            {/* <Github size={16} /> */}
            Source Code
            <ArrowUpRight size={14} />
          </a>
        </div>
      )}
    </div>
  );

  return (
    <article className="grid grid-cols-1 items-center gap-6 py-7 sm:gap-8 md:grid-cols-2 md:gap-10 md:py-9">
      <div className={imageFirst ? "md:order-1" : "md:order-2"}>
        {image}
      </div>

      <div className={imageFirst ? "md:order-2" : "md:order-1"}>
        {content}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-5">
          <p className="text-xs font-medium tracking-[0.25em] text-white/40">
            03 / SELECTED WORK
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/55 sm:text-base">
            A collection of projects exploring full-stack development,
            backend systems, and practical AI applications.
          </p>
        </div>

        <div className="divide-y divide-white/10">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.number}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
