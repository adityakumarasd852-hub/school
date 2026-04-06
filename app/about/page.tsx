"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Star, Target, Users } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlowLinkButton from "@/components/GlowLinkButton";

const values = [
  {
    icon: Target,
    title: "Vision Led",
    text: "We inspire learners to become global citizens rooted in values and excellence."
  },
  {
    icon: Users,
    title: "Student Centric",
    text: "Every learner receives personalized care, guidance, and opportunities to shine."
  },
  {
    icon: Star,
    title: "Holistic Growth",
    text: "Academics, sports, arts, and leadership are balanced for complete development."
  },
  {
    icon: ShieldCheck,
    title: "Safe Campus",
    text: "A secure, inclusive, and nurturing environment for confident learning."
  }
];

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteNavbar />

      <section className="relative overflow-hidden bg-forest pt-32 text-white">
        <div className="absolute inset-0 opacity-30 floating-particles" />
        <div className="section-pad relative mx-auto max-w-[1300px] py-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-5xl">
            About Our School
          </motion.h1>
          <p className="max-w-3xl text-white/85">
            Greenfield International School blends legacy, innovation, and values to nurture future-ready learners in
            a premium academic ecosystem.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1300px] items-center gap-10 lg:grid-cols-2">
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4">
            {[
              "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1588072432904-843af37f03ed?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80",
              "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80"
            ].map((src) => (
              <div key={src} className="overflow-hidden rounded-2xl">
                <Image src={src} alt="School life" width={700} height={500} className="h-full w-full object-cover" />
              </div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="mb-4 text-4xl text-forest">Legacy of Trust, Future of Excellence</h2>
            <p className="mb-4 text-slate-700">
              For over two decades, our school has empowered students through rigorous academics, strong mentorship,
              and value-based learning. We focus on discipline, empathy, and global readiness.
            </p>
            <p className="mb-6 text-slate-700">
              From smart classrooms and advanced labs to cultural forums and sports arenas, we ensure every child
              receives opportunities to discover, perform, and lead.
            </p>
            <GlowLinkButton text="Explore Academics" href="/academics" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-8 text-center text-4xl text-forest">Our Core Values</h2>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-soft"
              >
                <value.icon className="mb-4 h-8 w-8 text-leaf" />
                <h3 className="mb-2 text-2xl text-forest">{value.title}</h3>
                <p className="text-sm text-slate-600">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-forest py-16">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-y-0 w-[200%] animate-wave bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.26)_35%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 text-white md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-4xl">Ready to Join Our Community?</h2>
            <p className="text-white/85">Admissions for 2026-27 are now open.</p>
          </div>
          <div className="animate-pulseGlow rounded-full">
            <GlowLinkButton text="Go to Admissions" href="/admissions" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
