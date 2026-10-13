
import {
    ArrowDownRight,
    ArrowRight,
    Code2,
    Download,
    User,
} from "lucide-react";

const Home = () => {
    return (
        <section
            id="home"

            className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[75vh] lg:px-8 lg:py-16"

        >
            <div className="grid w-full items-center gap-12 lg:grid-cols-2 lg:gap-16">

                {/* Left: Introduction */}
                <div className=" space-y-5 sm:space-y-8">

                    <p className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-gray-400">
                        <span className="h-px w-8 bg-gray-500" />
                        Full Stack Developer
                    </p>


                    <h1 className="hero-title text-5xl font-extrabold leading-[0.95] tracking-[-0.055em] text-white sm:text-6xl lg:text-8xl">
                        Harsh Singh
                        <span className="text-gray-500">.</span>
                    </h1>


                    <h2 className="max-w-xl text-2xl font-medium leading-snug text-gray-300 sm:text-3xl">
                        Building ideas into{" "}
                        <span className="text-white">
                            digital products.
                        </span>
                    </h2>

                    <p className="max-w-lg text-base leading-8 text-gray-400 sm:text-lg">
                        I build modern web applications and backend systems,
                        turning ideas into useful, reliable products.
                    </p>

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-2">

                        <a
                            href="#projects"
                            className="group inline-flex items-center gap-3 rounded-xl bg-gray-100 px-6 py-3.5 font-semibold text-gray-950 transition-all duration-300 hover:bg-white hover:shadow-lg hover:shadow-white/10"
                        >
                            Explore Projects

                            <ArrowRight
                                size={18}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 font-medium text-gray-200 transition-all duration-300 hover:border-white/30 hover:bg-white/[0.07]"
                        >
                            <Download size={18} />
                            Resume
                        </a>
                    </div>

                    {/* Social links */}
                    <div className="flex items-center gap-5 pt-3">

                        <span className="text-sm text-gray-500">
                            Find me on
                        </span>

                        <a
                            href="https://github.com/harsh123singj"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub profile"
                            className="text-gray-400 transition-colors hover:text-white"
                        >
                            <Code2 size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn profile"
                            className="text-gray-400 transition-colors hover:text-white"
                        >
                            <User size={22} />
                        </a>
                    </div>
                </div>

                {/* Right: Developer workspace */}
                {/* Hidden on mobile and tablet */}
                <div className="relative hidden min-w-0 items-center justify-center lg:flex">

                    {/* Subtle background glow */}
                    <div className="absolute h-80 w-80 rounded-full bg-white/[0.04] blur-3xl" />

                    {/* Developer card */}
                    <div className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[#101114]/80 p-6 shadow-2xl backdrop-blur-sm">

                        {/* Card header */}
                        <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-5">

                            <div className="flex items-center gap-3">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                                    <Code2
                                        size={21}
                                        className="text-gray-200"
                                    />
                                </div>

                                <div>
                                    <p className="font-medium text-white">
                                        Harsh Singh
                                    </p>

                                    <p className="mt-1 text-xs text-gray-500">
                                        Full Stack Developer
                                    </p>
                                </div>
                            </div>

                            <img
                                src="/images/profile.jpg"
                                alt="Harsh singh"
                                className="h-11 w-11 shrink-0 rounded-full border border-white/15 objct-cover transition-transform duration-300 hover:scale-105"
                            />
                        </div>

                        {/* Code-inspired visual */}
                        <div className="my-6 overflow-x-auto rounded-xl border border-white/[0.07] bg-black/30 p-5 font-mono text-xs leading-7 sm:text-sm">

                            <p>
                                <span className="text-gray-400">const</span>{" "}
                                <span className="text-white">developer</span>{" "}
                                = {"{"}
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-400">name:</span>{" "}
                                <span className="text-gray-200">
                                    "Harsh Singh"
                                </span>,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-400">role:</span>{" "}
                                <span className="text-gray-200">
                                    "Full Stack Developer"
                                </span>,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-400">github:</span>{" "}
                                <a
                                    href="https://github.com/harsh123singj"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
                                >
                                    "github.com/harsh123singj"
                                </a>,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-400">linkedin:</span>{" "}
                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 underline decoration-white/20 underline-offset-4 transition hover:text-white"
                                >
                                    "LinkedIn profile"
                                </a>,
                            </p>

                            <p className="pl-5">
                                <span className="text-gray-400">focus:</span>{" "}
                                <span className="text-gray-200">
                                    "Building useful products"
                                </span>
                            </p>

                            <p>{"}"}</p>
                        </div>

                        {/* Card footer */}
                        <div className="flex items-center justify-between gap-4">

                            <div>
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                    Currently
                                </p>

                                <p className="mt-1 text-sm text-gray-300">
                                    Building full-stack projects
                                </p>
                            </div>

                            <a
                                href="#projects"
                                className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-200 transition hover:bg-white/[0.06] hover:text-white"
                            >
                                View work
                                <ArrowRight size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                className="absolute bottom-3 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-widest text-gray-500 transition-colors hover:text-white sm:flex"
            >
                Scroll to explore
                <ArrowDownRight size={15} />
            </a>
        </section>
    );
};

export default Home;
