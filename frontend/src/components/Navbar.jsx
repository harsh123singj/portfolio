
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpenMenu, setMenu] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", href: "#home", id: "home" },
        { name: "About", href: "#about", id: "about" },
        { name: "Skills", href: "#skills", id: "skills" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    // Track the section currently visible on screen
    useEffect(() => {
        const sections = navLinks
            .map((link) => document.getElementById(link.id))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            b.intersectionRatio - a.intersectionRatio
                    );

                if (visibleSections.length > 0) {
                    setActiveSection(visibleSections[0].target.id);
                }
            },
            {
                rootMargin: "-20% 0px -60% 0px",
                threshold: [0, 0.1, 0.25, 0.5],
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const linkClasses = (id) =>
        `rounded-full px-3 py-2 text-sm font-medium transition-all duration-300 ${activeSection === id
            ? "bg-white/[0.08] text-white"
            : "text-gray-300 hover:bg-white/[0.04] hover:text-white"
        }`;

    return (
        <header className="sticky top-0 z-50 mx-auto max-w-5xl px-4 pt-3 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between rounded-4xl border border-white/[0.08] bg-[#101114]/65 p-3 shadow-lg shadow-black/20 backdrop-blur-md transition-colors duration-300 sm:p-4">

                {/* Logo */}
                <a
                    href="#home"
                    onClick={() => setActiveSection("home")}
                    className="text-xl font-bold tracking-wide text-white transition-colors duration-300 hover:text-gray-300 sm:text-2xl"
                >
                    Harsh<span className="text-gray-400">.dev</span>
                </a>

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-2 md:flex lg:gap-3">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={link.href}
                                aria-current={
                                    activeSection === link.id
                                        ? "location"
                                        : undefined
                                }
                                onClick={() => setActiveSection(link.id)}
                                className={linkClasses(link.id)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Resume Button */}
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-gray-200 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white md:flex"
                >
                    <Download size={18} />
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <button
                    type="button"
                    onClick={() => setMenu(!isOpenMenu)}
                    className="rounded-lg border border-white/10 bg-white/[0.03] p-2 text-gray-300 transition-colors duration-300 hover:bg-white/[0.08] hover:text-white md:hidden"
                    aria-label={isOpenMenu ? "Close menu" : "Open menu"}
                    aria-expanded={isOpenMenu}
                >
                    {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation */}
            {isOpenMenu && (
                <div className="mt-2 space-y-2 rounded-2xl border border-white/[0.08] bg-[#101114]/95 p-4 text-white shadow-xl shadow-black/20 backdrop-blur-md md:hidden">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            aria-current={
                                activeSection === link.id
                                    ? "location"
                                    : undefined
                            }
                            onClick={() => {
                                setActiveSection(link.id);
                                setMenu(false);
                            }}
                            className={`block ${linkClasses(link.id)}`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        
                        rel="noopener noreferrer"
                        onClick={() => setMenu(false)}
                        className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 font-semibold text-gray-200 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
                    >
                        <Download size={18} />
                        View / Download Resume
                    </a>


                </div>
            )}
        </header>
    );
};

export default Navbar;
