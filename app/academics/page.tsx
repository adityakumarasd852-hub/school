"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Medal, Trophy } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlowLinkButton from "@/components/GlowLinkButton";

const academics = [
  {
    icon: BookOpen,
    title: "Curriculum",
    text: "A balanced CBSE framework with inquiry-led learning, experiential projects, and deep conceptual clarity."
  },
  {
    icon: Trophy,
    title: "Results & Achievements",
    text: "Consistent board excellence with distinction-level outcomes and national-level recognition."
  },
  {
    icon: Medal,
    title: "Olympiads",
    text: "Special mentoring for Science, Mathematics, English, and coding olympiads at national and global levels."
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    text: "Structured counseling, aptitude profiling, and university planning for informed career choices."
  }
];

export default function AcademicsPage() {
  return (
    <main className="relative">
      <SiteNavbar />

      <section className="relative overflow-hidden bg-forest pt-32 text-white">
        <div className="absolute inset-0 opacity-30 floating-particles" />
        <div className="section-pad relative mx-auto max-w-[1300px] py-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-5xl">
            Academics
          </motion.h1>
          <p className="max-w-3xl text-white/85">
            Rigor, relevance, and results. Our academic ecosystem is designed to help each student excel with
            confidence and purpose.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-3 text-center text-4xl text-forest">Academic Excellence Framework</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
            Every child learns through structured mentoring, progressive pedagogy, and measurable outcomes.
          </p>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {academics.map((card, idx) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.12 }}
                whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
                className="interactive rounded-2xl border border-transparent bg-white p-6 shadow-soft transition hover:border-leaf/60 hover:shadow-glow"
              >
                <card.icon className="mb-4 h-8 w-8 text-leaf" />
                <h3 className="mb-2 text-2xl text-forest">{card.title}</h3>
                <p className="text-sm text-slate-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1200px] gap-6 rounded-3xl bg-forest p-8 text-white md:grid-cols-3">
          {[
            { title: "Teacher-Student Ratio", value: "1:25" },
            { title: "Board Results", value: "100%" },
            { title: "Scholarships", value: "120+" }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/20 bg-white/10 p-5">
              <p className="mb-2 text-4xl font-bold text-gold">{item.value}</p>
              <p className="text-white/85">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-forest py-16">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-y-0 w-[200%] animate-wave bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.26)_35%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 text-white md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-4xl">See Our Campus Infrastructure</h2>
            <p className="text-white/85">Explore the spaces where learning comes alive.</p>
          </div>
          <div className="animate-pulseGlow rounded-full">
            <GlowLinkButton text="View Facilities" href="/facilities" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
