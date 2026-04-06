"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlowLinkButton from "@/components/GlowLinkButton";

const facilities = [
  {
    title: "Smart Classrooms",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1600&q=80",
    text: "Interactive digital boards, blended learning tools, and collaborative classroom environments."
  },
  {
    title: "AI & Robotics Lab",
    image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1600&q=80",
    text: "Hands-on robotics and AI projects where students build, test, and innovate with confidence."
  },
  {
    title: "Library",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1600&q=80",
    text: "A serene knowledge hub with curated print and digital resources for all age groups."
  },
  {
    title: "Swimming Pool",
    image: "https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1600",
    text: "Professional-grade aquatics training with safety-first coaching and structured development."
  },
  {
    title: "Sports Complex",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=1600&q=80",
    text: "Indoor and outdoor facilities designed to nurture discipline, teamwork, and peak performance."
  }
];

export default function FacilitiesPage() {
  return (
    <main className="relative">
      <SiteNavbar />

      <section className="relative overflow-hidden bg-forest pt-32 text-white">
        <div className="absolute inset-0 opacity-30 floating-particles" />
        <div className="section-pad relative mx-auto max-w-[1300px] py-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-5xl">
            Infrastructure & Facilities
          </motion.h1>
          <p className="max-w-3xl text-white/85">
            Purpose-built spaces for learning, innovation, wellness, and performance.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto max-w-[1320px] space-y-16">
          {facilities.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`grid items-center gap-7 lg:grid-cols-2 ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-3xl">
                <Image src={item.image} alt={item.title} width={1200} height={760} className="h-[290px] w-full object-cover transition duration-700 hover:scale-105 md:h-[390px]" />
              </div>
              <div>
                <h3 className="mb-3 text-3xl text-forest">{item.title}</h3>
                <p className="mb-4 text-slate-700">{item.text}</p>
                <Link
                  href={`/admissions?enquiry=${encodeURIComponent(item.title)}`}
                  className="interactive group inline-flex items-center gap-2 rounded-full border border-forest px-5 py-2 text-sm font-medium text-forest transition hover:bg-forest hover:text-white"
                >
                  Know More
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-8 text-center text-4xl text-forest">Gallery Preview</h2>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {[
              "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1400&q=80",
              "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1400&q=80"
            ].map((src) => (
              <div key={src} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
                <Image src={src} alt="Facility gallery" width={900} height={1100} className="h-auto w-full object-cover transition duration-500 hover:scale-105" />
              </div>
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
            <h2 className="mb-2 text-4xl">Admissions Open for 2026-27</h2>
            <p className="text-white/85">Take the next step and schedule an interaction.</p>
          </div>
          <div className="animate-pulseGlow rounded-full">
            <GlowLinkButton text="Apply Now" href="/admissions" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
