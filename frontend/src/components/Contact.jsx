
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  MessageSquareCode,
  Send,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const inputClasses =
  "w-full rounded-xl border border-white/10 bg-white/[0.045] px-4 py-4 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-white/25 focus:bg-white/[0.07]";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage(
        "Email service is not configured yet. Please try again later."
      );
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        { publicKey }
      );

      setStatus("success");
      setStatusMessage(
        "Transfer complete. Your message has been delivered."
      );
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setStatusMessage(
        "Transfer failed. Please try again or email me directly."
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
    >
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute left-[12%] top-1/3 -z-10 size-64 rounded-full bg-cyan-500/[0.045] blur-[110px]" />
      <div className="pointer-events-none absolute right-[10%] top-1/2 -z-10 size-72 rounded-full bg-purple-500/[0.06] blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <div className="relative mb-12 text-center sm:mb-16">
          <div className="absolute left-0 top-1/2 hidden h-px w-[28%] bg-gradient-to-r from-transparent via-white/20 to-white/10 md:block" />
          <div className="absolute right-0 top-1/2 hidden h-px w-[28%] bg-gradient-to-l from-transparent via-white/20 to-white/10 md:block" />

          <p className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Open<span className="text-gray-400">.</span>
            <span className="text-gray-400">Channel</span>
          </p>

          <p className="mt-4 font-mono text-sm text-white/50 sm:text-base">
            Initiate communication protocol
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1fr] lg:gap-8">
          {/* Message form */}
          <div className="relative rounded-2xl border border-white/[0.09] bg-gradient-to-br from-[#101a20]/90 via-[#11121b]/95 to-[#17111f]/90 p-5 shadow-[0_0_50px_rgba(34,211,238,0.035)] sm:p-7">
            <div className="absolute left-0 top-8 h-12 w-px bg-cyan-400/70" />

            <h3 className="flex items-center gap-3 text-xl font-semibold tracking-tight text-white sm:text-2xl">
              <MessageSquareCode className="text-gray-400" size={25} />
              Transmit Message
            </h3>

            <form onSubmit={handleSubmit} className="mt-7 space-y-6">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-3 block font-mono text-xs tracking-wider text-white/50"
                >
                  IDENT
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={100}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-3 block font-mono text-xs tracking-wider text-white/50"
                >
                  SIGNAL ADDRESS
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={inputClasses}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-3 block font-mono text-xs tracking-wider text-white/50"
                >
                  DATA PAYLOAD
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Enter your message"
                  value={form.message}
                  onChange={handleChange}
                  minLength={5}
                  maxLength={4000}
                  required
                  className={`${inputClasses} resize-y`}
                />
              </div>

              {statusMessage && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm ${
                    status === "error"
                      ? "text-red-400"
                      : status === "success"
                        ? "text-emerald-400"
                        : "text-white/60"
                  }`}
                >
                  {statusMessage}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex w-full items-center justify-center gap-3 rounded-xl border border-gray-400/70 bg-gray-400/[0.025] px-5 py-4 font-mono text-xs font-semibold tracking-[0.18em] text-white-300 transition duration-300 hover:bg-cyan-400/[0.09] hover:shadow-[0_0_25px_rgba(34,211,238,0.08)] disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
              >
                <Send
                  size={17}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
                {status === "sending"
                  ? "TRANSMITTING..."
                  : "INITIALIZE TRANSFER"}
              </button>
            </form>
          </div>

          {/* Contact details and social links */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-white/[0.09] bg-white/[0.025] p-6 sm:p-8">
              <h3 className="text-2xl font-semibold tracking-tight text-white">
                Node Details
              </h3>

              <div className="mt-7 space-y-6">
                <a
                  href="mailto:harsh123singj@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-400 transition group-hover:border-cyan-400/30">
                    <Mail size={22} />
                  </span>

                  <span className="min-w-0">
                    <span className="block font-mono text-xs tracking-wider text-white/45">
                      EMAIL ENDPOINT
                    </span>
                    <span className="mt-2 block break-all text-sm font-medium text-white/90 transition group-hover:text-cyan-300 sm:text-base">
                      harsh123singj@gmail.com
                    </span>
                  </span>
                </a>

                <div className="flex items-center gap-4">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-pink-400">
                    <MapPin size={22} />
                  </span>

                  <span>
                    <span className="block font-mono text-xs tracking-wider text-white/45">
                      PHYSICAL LOCATION
                    </span>
                    <span className="mt-2 block text-base font-medium text-white/90">
                      New Delhi, India
                    </span>
                  </span>
                </div>
              </div>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-4">
              <a
                href="https://github.com/harsh123singj"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit GitHub profile"
                className="group relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 text-white/75 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <span className="text-3xl font-bold tracking-tight">GH</span>
                <span className="text-sm font-medium">GitHub</span>
                <ArrowUpRight
                  size={14}
                  className="absolute right-4 top-4 opacity-0 transition group-hover:opacity-100"
                />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit LinkedIn"
                className="group relative flex min-h-32 flex-col items-center justify-center gap-3 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5 text-white/75 transition hover:border-white/20 hover:bg-white/[0.05] hover:text-white"
              >
                <span className="text-3xl font-bold tracking-tight text-sky-400">
                  in
                </span>
                <span className="text-sm font-medium">LinkedIn</span>
                <ArrowUpRight
                  size={14}
                  className="absolute right-4 top-4 opacity-0 transition group-hover:opacity-100"
                />
              </a>

              <div className="col-span-2 flex min-h-28 items-center justify-center gap-4 rounded-2xl border border-white/[0.09] bg-white/[0.025] p-5">
                <span className="relative flex size-3 shrink-0">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex size-3 rounded-full bg-emerald-400 shadow-[0_0_16px_rgba(52,211,153,0.5)]" />
                </span>

                <span className="font-mono text-xs leading-6 tracking-[0.12em] text-emerald-400 sm:text-sm">
                  STATUS: ONLINE
                  <br />
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-12 border-t border-white/[0.08] pt-6 text-center font-mono text-xs text-white/35">
          HARSH SINGH <span className="mx-2">/</span> CONNECTION ESTABLISHED
        </footer>
      </div>
    </section>
  );
}
