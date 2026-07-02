import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook, Twitter, Instagram, Youtube, Linkedin, Music2 } from "lucide-react";
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
      <div className="flex-shrink-0 w-7 h-7 rounded-md bg-[#DCFF00] flex items-center justify-center text-[#0A0A0A] font-bold text-xs mt-0.5">
        {number}
      </div>
      <p className="text-[15px] leading-[1.55] text-[#E8E8E8]">{children}</p>
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
      className="inline-flex items-center gap-3 bg-[#DCFF00] text-[#0A0A0A] font-bold rounded-lg px-6 py-3 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
    >
      {label}
      <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
    </a>
  );
}

function SolidButton({ label }: { label: string }) {
  return (
    <a
      href="#subscribe"
      className="inline-block bg-white text-[#0A0A0A] font-bold rounded-lg px-8 py-3 hover:bg-[#E8E8E8] hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
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
    <div className="min-h-screen bg-[#111111] font-sans text-[#F2F2F2] flex flex-col">
      <div className="w-full flex-1">
        {/* Section 1 — Hero */}
        <section className="relative w-full overflow-hidden h-[85vh] min-h-[600px] max-h-[900px] flex flex-col justify-end">
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
                "linear-gradient(to bottom, rgba(17,17,17,0) 30%, rgba(17,17,17,0.5) 60%, rgba(17,17,17,0.95) 85%, rgba(17,17,17,1) 100%)",
            }}
          />
          <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-12 pb-16">
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-white text-center">
              <div style={serif} className="text-[28px] leading-[0.95] tracking-tight">
                Lino
              </div>
              <div className="text-[12px] tracking-[0.22em] font-medium mt-1">NEWSLETTER</div>
            </div>

            <div className="text-white text-[12px] tracking-[0.28em] font-semibold mb-6">
              NOW READING
            </div>
            <h1
              style={serif}
              className="text-white text-4xl sm:text-[50px] leading-[1.02] tracking-tight max-w-[560px]"
            >
              Technology. Science.
              <br />
              The Future.
            </h1>
            <a
              href="#subscribe"
              className="mt-8 inline-flex items-center gap-3 bg-[#D8F90A] text-[#1E1E1E] font-semibold rounded-full px-7 py-3.5 hover:bg-[#c9ea00] hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
            >
              Subscribe Free
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
            </a>
          </div>
        </section>

        {/* Section 2 — Intro */}
        <section className="max-w-3xl mx-auto px-6 pb-8 pt-12">
          <p className="text-center text-[16px] sm:text-[17px] leading-[1.6]">
            Lino is one carefully curated newsletter covering artificial intelligence, startups,
            scientific discoveries, engineering, space, and the breakthroughs shaping tomorrow —
            delivered straight to your inbox.
          </p>
        </section>
        <div className="flex justify-center pb-16">
          <PrimaryButton label="Join the Newsletter" />
        </div>

        <Divider />

        {/* Section 3 */}
        <div className="max-w-4xl mx-auto">
          <div className="px-6 sm:px-9 pb-8 pt-8">
            <h2
              style={serif}
              className="text-center text-3xl sm:text-[40px] leading-[1.05] tracking-tight"
            >
              The future, explained simply
            </h2>
          </div>
          <div className="px-4 pb-12">
            <a
              href="#subscribe"
              aria-label="Subscribe to see the latest issue"
              className="block overflow-hidden rounded-[14px] group max-w-3xl mx-auto"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] sm:h-[450px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.02]"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260419_065931_e3ca7b53-d32e-4ad5-81de-dc9d6fcfda6d.mp4"
              />
            </a>
          </div>
          <div className="px-6 pb-12">
            <div className="max-w-[520px] mx-auto">
              <Step number={1}>
                Understand the biggest stories in AI, robotics, and science — distilled into clear,
                five-minute reads.
              </Step>
              <Step number={2}>
                Track the startups, labs, and founders quietly building the next decade of
                technology.
              </Step>
              <Step number={3}>
                Follow the breakthroughs in space, climate tech, and engineering that will define
                the future.
              </Step>
              <Step number={4}>
                Get thoughtful analysis instead of noise — quality writing trusted by builders,
                founders, and curious minds.
              </Step>
            </div>
          </div>
          <div className="flex justify-center pb-16">
            <SolidButton label="Subscribe Free" />
          </div>
        </div>

        <Divider />

        {/* Section 4 */}
        <div className="max-w-4xl mx-auto">
          <div className="pb-8 px-6 sm:px-9 pt-8">
            <h2
              style={serif}
              className="text-center text-3xl sm:text-[40px] leading-[1.05] tracking-tight"
            >
              One email. Five minutes.
              <br />
              Complete clarity.
            </h2>
          </div>
          <div className="px-4 pb-10">
            <a
              href="#subscribe"
              aria-label="Subscribe to see the latest issue"
              className="block overflow-hidden rounded-[14px] group max-w-3xl mx-auto"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[300px] sm:h-[450px] object-cover rounded-[14px] transition-transform duration-700 group-hover:scale-[1.02]"
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260417_110451_9f82b157-dc92-4a9f-a341-c25594ec20e1.mp4"
              />
            </a>
          </div>
          <div className="max-w-2xl mx-auto px-6 pb-12">
            <p className="text-center text-[16px] sm:text-[17px] leading-[1.6]">
              Every week, you'll receive a single, thoughtfully edited issue covering the most
              important developments across AI, science, engineering, and the ideas shaping
              tomorrow. Written for curious people. Trusted by builders, founders, students, and
              creators.
            </p>
          </div>
          <div className="flex justify-center pb-16">
            <SolidButton label="Read the Latest Issue" />
          </div>
        </div>

        {/* Section 5 — Lime CTA */}
        <section id="subscribe" className="max-w-3xl mx-auto px-4 pb-20 pt-8">
          <div className="bg-[#D8F90A] rounded-[14px] px-6 py-12 text-center shadow-lg">
            <h2
              style={serif}
              className="text-[#1E1E1E] text-3xl sm:text-[42px] leading-[1.05] tracking-tight mb-3"
            >
              Ready to read
              <br />
              the future?
            </h2>
            <p className="text-[#1E1E1E]/80 text-[15px] leading-[1.5] mb-8 px-4 font-medium">
              Join thousands of readers exploring the future every week.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 max-w-[380px] mx-auto"
            >
              <input
                type="email"
                required
                aria-label="Email address for newsletter subscription"
                placeholder="Enter your email"
                className="flex-1 rounded-lg px-4 py-3 bg-white text-[#1E1E1E] placeholder:text-[#83837D] outline-none border border-transparent focus:border-[#1E1E1E] font-medium text-[15px]"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#1E1E1E] text-white font-bold rounded-lg px-6 py-3 hover:bg-black hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
              >
                Subscribe
                <ArrowRight className="w-4 h-4" strokeWidth={2.5} />
              </button>
            </form>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-[#080808] text-white pt-16 px-6 pb-12 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="pb-8 flex justify-center">
            <a
              href="#"
              style={serif}
              className="text-[30px] font-bold tracking-tight text-white hover:text-[#DCFF00] transition-colors"
            >
              Lino
            </a>
          </div>
          <p className="text-[13px] text-[#83837D] leading-[1.6] max-w-[400px] mx-auto pb-10">
            Lino is an independent technology and science newsletter delivering thoughtful analysis,
            breakthrough discoveries, and the ideas shaping tomorrow.
          </p>
          <div className="flex justify-center pb-10">
            <div className="h-px w-24 bg-white/10" />
          </div>
          <div className="flex justify-center gap-5 pb-8">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1E1E1E] hover:border-white transition-colors"
              >
                <Icon className="w-[18px] h-[18px]" />
              </a>
            ))}
          </div>
          <div className="text-[13px] pb-6 space-x-3 text-[#8F8E88]">
            <a href="#" className="hover:text-white transition-colors">
              About
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Archive
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Contact
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
          <p className="text-[12px] text-white/40">
            ©2026 Lino, 660 4th Street #443, San Francisco, CA 94107 USA
          </p>
        </div>
      </footer>
    </div>
  );
}
