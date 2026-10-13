
import {
    BrainCircuit,
    GraduationCap,
    Code2,
    Layers3,
    ArrowUpRight,
    Heart
} from "lucide-react";

const About = () => {
    return (
        <section
            id="about"
            className="relative mx-auto max-w-7xl scroll-mt-28 px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
        >
            {/* Section heading */}
            <div className="mb-10 flex items-center gap-4 sm:mb-14">
                <h2 className="shrink-0 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    About<span className="text-gray-500">.</span>
                </h2>

                <div className="h-px flex-1 bg-gradient-to-r from-white/20 to-transparent" />

                <span className="hidden text-xs tracking-[0.2em] text-gray-500 sm:block">
                    01 / ABOUT ME
                </span>
            </div>

            {/* Main layout */}
            <div className="grid gap-5 lg:grid-cols-[1.7fr_1fr]">

                {/* Main introduction card */}
                <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#111820] via-[#101116] to-[#111019] p-6 transition-colors duration-300 hover:border-white/20 sm:p-9 lg:p-10">

                    {/* Subtle decorative glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/[0.035] blur-3xl transition-opacity duration-500 group-hover:bg-white/[0.06]" />

                    {/* Accent edge */}
                    <div className="absolute bottom-8 left-0 top-8 w-1 rounded-r-full bg-gradient-to-b from-gray-300/60 via-gray-500/20 to-transparent" />

                    <div className="relative flex h-full flex-col items-start">

                        <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                            <BrainCircuit
                                size={25}
                                className="text-gray-200"
                            />
                        </div>

                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
                            A little about me
                        </p>

                        <h3 className="mb-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                            Beyond the code.
                        </h3>

                        <p className="max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            I'm a Computer Science engineering student who
                            enjoys building full-stack applications, solving
                            problems, and turning ideas into useful digital
                            products.
                        </p>

                        <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
                            I enjoy working across the frontend and backend,
                            learning how systems work, and improving my code
                            through hands-on projects and consistent practice.
                        </p>

                        {/* Bottom details */}
                        <div className="mt-8 grid w-full grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:mt-auto sm:pt-7">

                            <div>
                                <p className="text-lg font-semibold text-white sm:text-xl">
                                    B.Tech CSE
                                </p>
                                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                    2027 batch
                                </p>
                            </div>

                            <div>
                                <p className="text-lg font-semibold text-white sm:text-xl">
                                    Full Stack
                                </p>
                                <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                                    Development focus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Information cards */}
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">

                    {/* Education */}
                    <article className="group rounded-2xl border border-white/10 bg-[#101114]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03] sm:p-7">

                        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                            <GraduationCap
                                size={23}
                                className="text-gray-200"
                            />
                        </div>

                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                            Education
                        </p>

                        <h3 className="text-xl font-semibold text-white">
                            B.Tech CSE
                        </h3>

                        <h4 className="text-xl font-semibold text-white">
                            Echelon Intitute of Technology.
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Computer Science and Engineering
                        </p>

                        <p className="mt-3 text-sm text-gray-500">
                            Expected graduation: 2027
                        </p>
                    </article>

                    {/* Technical interests */}
                    <article className="group rounded-2xl border border-white/10 bg-[#101114]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.03] sm:p-7">

                        <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                            <Heart
                                size={23}
                                className="text-gray-200"
                            />
                        </div>

                        <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
                            Interests
                        </p>

                        <h3 className="text-xl font-semibold text-white">
                            Sports & Singing
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-gray-400">
                            Basketball ,Video Games & etc.
                        </p>

                        <a
                            href="#skills"
                            className="mt-5 inline-flex items-center gap-2 text-sm text-gray-300 transition-colors hover:text-white"
                        >
                            Explore my skills
                            <ArrowUpRight
                                size={16}
                                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                        </a>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default About;
