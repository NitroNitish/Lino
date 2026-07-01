import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  Music2,
} from "lucide-react";
import type { ReactNode } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lino — The Future, Explained." },
      {
        name: "description",
        content:
          "One carefully curated newsletter covering AI, startups, science, engineering, space, and breakthrough innovations — delivered weekly.",
      },
    ],
  }),
});

const serif = { fontFamily: "'Instrument Serif', serif" } as const;

function Step({ number, children }: { number: number; children: ReactNode }) {
  return (
    <div className="flex items-start gap-5 mb-6 last:mb-0">
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-1">
        {number}
      </div>
      <p className="text-[17px] leading-[1.55] text-[#E8E8E8]">{children}</p>
    </div>
  );
}

function Divider() {
  return (
    <div className="py-8 flex justify-center">
      <div className="h-px w-24 bg-white/20" />
    </div>
  );
}

function PrimaryButton({ label }: { label: string }) {
  return (
    <a
      href="#subscribe"
      className="inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200"
    >
      {label}
      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
    </a>
  );
}

function SolidButton({ label }: { label: string }) {
  return (
    <a
      href="#subscribe"
      className="inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200"
    >
      {label}
    </a>
  );
}

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Youtube, label: "YouTube" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Music2, label: "TikTok" },
];

function Index() {
  return (
    <div className="min-h-screen bg-[#050505] py-10 px-4 font-sans">
      <div className="max-w-[640px] mx-auto shadow-2xl overflow-hidden ring-1 ring-white/5">
        <div className="bg-[#111111] text-[#F2F2F2]">
          {/* Section 1 — Hero */}
          <section
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "640 / 820" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_064822_f120e48a-d545-45dd-a02d-facb07829888.mp4"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(17,17,17,0) 45%, rgba(17,17,17,0.45) 68%, rgba(17,17,17,0.9) 88%, rgba(17,17,17,1) 100%)",
              }}
            />
            <div className="relative z-10 h-full flex flex-col items-center text-center px-6 pt-12 pb-10">
              <div className="text-white">
                <div
                  style={serif}
                  className="text-[28px] leading-[0.95] tracking-tight"
                >
                  Lino
                </div>
                <div className="text-[13px] tracking-[0.22em] font-medium mt-1">
                  NEWSLETTER
                </div>
              </div>
              <div className="mt-40 text-white text-[13px] tracking-[0.28em] font-semibold">
                NOW READING
              </div>
              <div className="flex-1" />
              <h1
                style={serif}
                className="text-white text-[58px] leading-[1.02] tracking-tight max-w-[560px]"
              >
                Technology. Science.
                <br />
                The Future.
              </h1>
              <a
                href="#subscribe"
                className="mt-10 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-8 py-4 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200"
              >
                Subscribe Free
                <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
              </a>
            </div>
          </section>

          {/* Section 2 — Intro */}
          <section className="px-[78px] pb-8 pt-4">
            <p className="text-center text-[18px] leading-[1.55]">
              Lino is one carefully curated newsletter covering artificial
              intelligence, startups, scientific discoveries, engineering,
              space, and the breakthroughs shaping tomorrow — delivered
              straight to your inbox. Free forever. No spam. Unsubscribe
              anytime.
            </p>
          </section>
          <div className="flex justify-center pb-14">
            <PrimaryButton label="Join the Newsletter" />
          </div>

          <Divider />

          {/* Section 3 */}
          <div className="px-9 pb-8">
            <h2
              style={serif}
              className="text-center text-[46px] leading-[1.05] tracking-tight"
            >
              The future, explained simply
            </h2>
          </div>
          <div className="px-[42px] pb-10">
            <a href="#subscribe" className="block overflow-hidden rounded-[14px] group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
              />
            </a>
          </div>
          <div className="px-[76px] pb-10">
            <div className="max-w-[489px] mx-auto">
              <Step number={1}>
                Understand the biggest stories in AI, robotics, and science —
                distilled into clear, five-minute reads.
              </Step>
              <Step number={2}>
                Track the startups, labs, and founders quietly building the
                next decade of technology.
              </Step>
              <Step number={3}>
                Follow the breakthroughs in space, climate tech, and
                engineering that will define the future.
              </Step>
              <Step number={4}>
                Get thoughtful analysis instead of noise — quality writing
                trusted by builders, founders, and curious minds.
              </Step>
            </div>
          </div>
          <div className="flex justify-center pb-14">
            <SolidButton label="Subscribe Free" />
          </div>

          <Divider />

          {/* Section 4 */}
          <div className="pb-7 px-9">
            <h2
              style={serif}
              className="text-center text-[46px] leading-[1.05] tracking-tight"
            >
              One email. Five minutes.
              <br />
              Complete clarity.
            </h2>
          </div>
          <div className="px-[42px] pb-10">
            <a href="#subscribe" className="block overflow-hidden rounded-[14px] group">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[370px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.03]"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
              />
            </a>
          </div>
          <div className="px-[78px] pb-8">
            <p className="text-center text-[18px] leading-[1.55]">
              Every week, you'll receive a single, thoughtfully edited issue
              covering the most important developments across AI, science,
              engineering, and the ideas shaping tomorrow. Written for
              curious people. Trusted by builders, founders, students, and
              creators.
            </p>
          </div>
          <div className="flex justify-center pb-14">
            <SolidButton label="Read the Latest Issue" />
          </div>

          {/* Section 5 — Lime CTA */}
          <section id="subscribe" className="px-14 pb-12">
            <div className="bg-[#D8F90A] rounded-[10px] px-8 py-12 text-center">
              <h2
                style={serif}
                className="text-[#1E1E1E] text-[52px] leading-[1.02] tracking-tight mb-3"
              >
                Ready to read
                <br />
                the future?
              </h2>
              <p className="text-[#1E1E1E] text-[18px] leading-[1.5] mb-8 px-4">
                Join thousands of readers exploring the future every week.
                Free forever.
              </p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-6"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg px-4 py-3 bg-white text-[#1E1E1E] placeholder:text-[#83837D] outline-none border border-transparent focus:border-[#1E1E1E] font-medium"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-[#1E1E1E] text-white font-bold rounded-lg px-6 py-3 hover:bg-black hover:-translate-y-0.5 transition-all duration-200"
                >
                  Subscribe Free
                  <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                </button>
              </form>
              <p className="text-[#1E1E1E]/70 text-[13px]">
                Free forever. No spam. Unsubscribe anytime.
              </p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-[#080808] text-white pt-12 px-10 text-center border-t border-white/5">
          <div className="pb-8 flex justify-center">
            <a
              href="#"
              style={serif}
              className="text-[30px] font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors"
            >
              Lino
            </a>
          </div>
          <p className="text-[12px] text-[#83837D] leading-[1.5] pb-8">
            Lino is an independent technology and science newsletter delivering
            thoughtful analysis, breakthrough discoveries, and the ideas
            shaping tomorrow.
          </p>
          <div className="flex justify-center pb-8">
            <div className="h-px w-24 bg-white/20" />
          </div>
          <div className="flex justify-center gap-5 pb-5">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-[#83837D] pb-4 leading-[1.6]">
            If you no longer want to receive the Lino newsletter, you can
            unsubscribe at any time by clicking "unsubscribe" below.
          </p>
          <div className="text-[12px] pb-3 space-x-2">
            <a href="#" className="hover:underline">About</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Archive</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Contact</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Privacy</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Terms</a>
            <span className="text-[#8F8E88]">|</span>
            <a href="#" className="hover:underline">Unsubscribe</a>
          </div>
          <a
            href="#"
            className="text-[12px] text-white/80 hover:text-white inline-block"
          >
            ©2026 Lino, 660 4th Street #443, San Francisco, CA 94107 USA
          </a>
          <div className="pb-10" />
        </footer>
      </div>
    </div>
  );
}
