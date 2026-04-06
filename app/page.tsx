"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Lenis from "lenis";
import { Award, BookOpen, Building2, ClipboardCheck, Sparkles } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlowLinkButton from "@/components/GlowLinkButton";
import CountUp from "@/components/CountUp";

const pageCards = [
  {
    title: "About Our Legacy",
    text: "Learn about our values, vision, and leadership journey.",
    href: "/about",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Academic Excellence",
    text: "Explore curriculum, results, olympiads, and career guidance.",
    href: "/academics",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "World-Class Facilities",
    text: "Smart classrooms, robotics labs, sports complex, and more.",
    href: "/facilities",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Admissions 2026-27",
    text: "View process, eligibility, and connect with our admissions team.",
    href: "/admissions",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80"
  }
];

const counters = [
  { icon: Award, value: 22, suffix: "+", label: "Years" },
  { icon: Building2, value: 5000, suffix: "+", label: "Students" },
  { icon: ClipboardCheck, value: 100, suffix: "%", label: "Success" },
  { icon: Sparkles, value: 50, suffix: "+", label: "Awards" }
];

const testimonials = [
  {
    name: "Aarav Mehra",
    role: "Alumnus",
    quote:
      "The school shaped my confidence and gave me the right blend of discipline, innovation, and mentorship.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Priya Sharma",
    role: "Parent",
    quote:
      "From academics to co-curricular growth, the care and professionalism here are truly exceptional.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Rhea Verma",
    role: "Student",
    quote:
      "I love the learning environment. Every class feels engaging and every opportunity feels meaningful.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
  }
];

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);

    const lenis = new Lenis({ duration: 1.2, smoothWheel: true, touchMultiplier: 1.2 });
    let rafId = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    gsap.from(".hero-word", {
      x: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.09,
      delay: 0.2,
      ease: "power3.out"
    });

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {loading && (
        <motion.div className="fixed inset-0 z-[140] grid place-items-center bg-forest" initial={{ opacity: 1 }}>
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mx-auto mb-4 h-14 w-14 rounded-full border-2 border-gold animate-pulseGlow" />
            <p className="text-2xl font-semibold tracking-[0.24em] text-white">GREENFIELD SCHOOL</p>
          </motion.div>
        </motion.div>
      )}

      <main className="relative">
        <SiteNavbar />

        <section className="noise relative flex min-h-screen items-center overflow-hidden pt-24" id="home">
          <Image
            src="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=2200"
            alt="Premium school campus background"
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 object-cover scale-105"
          />
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-45"
            poster="https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=2200"
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-campus-1579/1080p.mp4" type="video/mp4" />
          </motion.video>
          <div className="floating-particles absolute inset-0 opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/82 via-forest/70 to-forest/60" />

          <div className="section-pad relative z-10 mx-auto grid w-full max-w-[1400px] gap-12 text-white lg:grid-cols-2">
            <div className="max-w-xl">
              <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-gold">
                Welcome to Our School
              </p>
              <h1 className="mb-5 text-4xl font-bold leading-tight md:text-5xl xl:text-6xl">
                {"Shaping Future Leaders with Excellence".split(" ").map((w, i) => (
                  <span key={i} className="hero-word mr-3 inline-block">
                    {w}
                  </span>
                ))}
              </h1>
              <p className="mb-8 max-w-lg text-sm text-white/85 md:text-base">
                A premium learning ecosystem where academic rigor meets innovation, sportsmanship, creativity, and
                values-driven growth.
              </p>
              <div className="flex flex-wrap gap-3">
                <GlowLinkButton text="Explore About" href="/about" />
                <GlowLinkButton text="Admission Open 2026-27" href="/admissions" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 self-end lg:pl-10">
              {[
                { value: "20+", label: "Years of Excellence" },
                { value: "5000+", label: "Students" },
                { value: "100+", label: "Faculty Members" },
                { value: "50+", label: "Awards" }
              ].map((stat) => (
                <div key={stat.label} className="glass hero-stat-card rounded-2xl p-5 shadow-soft">
                  <p className="mb-1 text-3xl font-semibold text-gold hero-stat-value">{stat.value}</p>
                  <p className="text-base font-medium text-white hero-stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad bg-white/70">
          <div className="mx-auto max-w-[1300px]">
            <h2 className="mb-3 text-center text-4xl text-forest">Explore Our 5-Page Website</h2>
            <p className="mx-auto mb-10 max-w-2xl text-center text-slate-600">
              Navigate each section with dedicated pages for a richer, clearer experience.
            </p>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pageCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{ rotateX: 3, rotateY: -3, scale: 1.02 }}
                  className="interactive overflow-hidden rounded-2xl bg-white shadow-soft"
                >
                  <Image src={card.image} alt={card.title} width={900} height={620} className="h-44 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="mb-2 text-2xl text-forest">{card.title}</h3>
                    <p className="mb-4 text-sm text-slate-600">{card.text}</p>
                    <Link href={card.href} className="text-sm font-semibold text-leaf transition hover:text-forest">
                      Visit Page {"->"}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad relative overflow-hidden bg-forest">
          <div className="absolute inset-0 floating-particles opacity-40" />
          <div className="relative mx-auto grid max-w-[1200px] gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {counters.map((item) => (
              <div key={item.label}>
                <item.icon className="mx-auto mb-2 h-7 w-7 text-gold" />
                <CountUp value={item.value} suffix={item.suffix} className="text-4xl font-bold text-white md:text-5xl" />
                <p className="mt-2 text-sm uppercase tracking-[0.15em] text-white/80">{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section-pad">
          <div className="mx-auto max-w-[1100px] rounded-3xl border border-white/30 bg-white/45 p-6 shadow-soft backdrop-blur md:p-10">
            <h2 className="mb-8 text-center text-4xl text-forest">What Families Say</h2>
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              autoplay={{ delay: 3600, disableOnInteraction: false }}
              rewind
              className="w-full"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.name}>
                  <div className="mx-auto max-w-3xl rounded-2xl bg-white/70 p-8 text-center">
                    <Image src={item.image} alt={item.name} width={88} height={88} className="mx-auto mb-4 h-20 w-20 rounded-full object-cover" />
                    <p className="mb-4 text-lg text-slate-700">"{item.quote}"</p>
                    <p className="text-xl text-forest">{item.name}</p>
                    <p className="text-sm uppercase tracking-[0.16em] text-slate-500">{item.role}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        <section className="section-pad relative overflow-hidden bg-forest py-16">
          <div className="absolute inset-0 opacity-25">
            <div className="absolute inset-y-0 w-[200%] animate-wave bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.26)_35%,transparent_70%)]" />
          </div>
          <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 text-white md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 text-4xl">Admissions Open for 2026-27</h2>
              <p className="text-white/85">Begin your child's journey with an institution committed to excellence and character.</p>
            </div>
            <div className="animate-pulseGlow rounded-full">
              <GlowLinkButton text="Request a Callback" href="/admissions" />
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
