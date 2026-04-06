"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ClipboardList, FileText, Loader2, PhoneCall } from "lucide-react";
import SiteNavbar from "@/components/SiteNavbar";
import SiteFooter from "@/components/SiteFooter";
import GlowLinkButton from "@/components/GlowLinkButton";

type FormData = {
  parentName: string;
  parentEmail: string;
  mobileNumber: string;
  studentName: string;
  studentGrade: string;
  preferredCallback: string;
  message: string;
};

const steps = [
  {
    icon: FileText,
    title: "Submit Inquiry",
    text: "Fill the online inquiry form and receive the admissions brochure and schedule."
  },
  {
    icon: ClipboardList,
    title: "Campus Interaction",
    text: "Attend a guided interaction session and counseling with our admissions team."
  },
  {
    icon: CheckCircle2,
    title: "Document Verification",
    text: "Complete verification and secure your seat with enrollment confirmation."
  }
];

const gradeOptions = [
  "Nursery",
  "KG",
  "Class 1",
  "Class 2",
  "Class 3",
  "Class 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12"
];

function initialForm(prefillMessage = ""): FormData {
  return {
    parentName: "",
    parentEmail: "",
    mobileNumber: "",
    studentName: "",
    studentGrade: "",
    preferredCallback: "",
    message: prefillMessage
  };
}

function validate(form: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (form.parentName.trim().length < 2) errors.parentName = "Enter a valid parent name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.parentEmail)) errors.parentEmail = "Enter a valid email.";
  if (!/^[0-9+\-\s()]{8,20}$/.test(form.mobileNumber.trim())) errors.mobileNumber = "Enter a valid mobile number.";
  if (form.studentName.trim().length < 2) errors.studentName = "Enter student name.";
  if (!form.studentGrade) errors.studentGrade = "Select a class/grade.";
  return errors;
}

export default function AdmissionsPage() {
  const [form, setForm] = useState<FormData>(() => initialForm(""));
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [sending, setSending] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [serverError, setServerError] = useState("");

  const emailTo = "adityakumarasd852@gmail.com";
  const emailSubject = `School Enquiry: ${form.parentName || "Parent"} (${form.studentGrade || "Grade not selected"})`;
  const emailBody = [
    `Parent Name: ${form.parentName}`,
    `Parent Email: ${form.parentEmail}`,
    `Mobile Number: ${form.mobileNumber}`,
    `Student Name: ${form.studentName}`,
    `Student Grade: ${form.studentGrade}`,
    `Preferred Callback Time: ${form.preferredCallback || "Not specified"}`,
    "",
    "Message:",
    form.message || "No message"
  ].join("\n");
  const mailtoHref = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  const gmailHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailTo)}&su=${encodeURIComponent(
    emailSubject
  )}&body=${encodeURIComponent(emailBody)}`;

  useEffect(() => {
    const enquiryTopic = new URLSearchParams(window.location.search).get("enquiry") || "";
    const message = enquiryTopic ? `I want more details about: ${enquiryTopic}` : "";
    if (message) {
      setForm((prev) => ({ ...prev, message: prev.message || message }));
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccessMsg("");
    setServerError("");

    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    try {
      const tab = window.open(gmailHref, "_blank", "noopener,noreferrer");
      if (!tab) {
        window.location.href = mailtoHref;
        setSuccessMsg("Email app opened. Please click Send to complete your enquiry.");
      } else {
        setSuccessMsg("Gmail compose opened. Please click Send to complete your enquiry.");
      }
      setForm(initialForm(""));
    } catch {
      setServerError("Could not open email compose automatically. Please use the buttons below.");
    } finally {
      setSending(false);
    }
  }

  function fieldClass(hasError: boolean) {
    return `w-full rounded-xl border px-4 py-3 outline-none transition ${
      hasError
        ? "border-red-300 bg-red-50/90 text-slate-800 placeholder:text-red-400"
        : "border-white/25 bg-white/10 text-white placeholder:text-white/70 focus:border-gold"
    }`;
  }

  return (
    <main className="relative">
      <SiteNavbar />

      <section className="relative overflow-hidden bg-forest pt-32 text-white">
        <div className="absolute inset-0 opacity-30 floating-particles" />
        <div className="section-pad relative mx-auto max-w-[1300px] py-16">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-3 text-5xl">
            Admissions 2026-27
          </motion.h1>
          <p className="max-w-3xl text-white/85">
            Begin your child's journey at Greenfield with a smooth and transparent admissions process.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white/70">
        <div className="mx-auto max-w-[1300px]">
          <h2 className="mb-8 text-center text-4xl text-forest">Admission Process</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="rounded-2xl bg-white p-6 shadow-soft"
              >
                <step.icon className="mb-4 h-8 w-8 text-leaf" />
                <h3 className="mb-2 text-2xl text-forest">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-7 shadow-soft">
            <h3 className="mb-4 text-3xl text-forest">Eligibility & Documents</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-leaf" />
                Birth Certificate copy
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-leaf" />
                Previous school report card
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-leaf" />
                Transfer Certificate (if applicable)
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-leaf" />
                Passport-size photographs
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-leaf" />
                Parent identity and address proof
              </li>
            </ul>
          </div>

          <div className="rounded-3xl bg-forest p-7 text-white shadow-soft">
            <h3 className="mb-2 text-5xl leading-tight">Request a Callback</h3>
            <p className="mb-6 text-white/85">
              Fill details and we will open your email composer with everything prefilled for quick sending.
            </p>

            {successMsg && <p className="mb-4 rounded-xl bg-leaf/20 p-3 text-sm text-green-100">{successMsg}</p>}
            {serverError && (
              <div className="mb-4 space-y-3">
                <p className="rounded-xl bg-red-900/35 p-3 text-sm text-red-100">{serverError}</p>
                <a
                  href={mailtoHref}
                  className="interactive inline-flex rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Send via Email App
                </a>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="parentName" className="mb-1 block text-sm font-medium text-white/90">
                    Parent Name
                  </label>
                  <input
                    id="parentName"
                    value={form.parentName}
                    onChange={(e) => setForm((prev) => ({ ...prev, parentName: e.target.value }))}
                    placeholder="Parent Name"
                    className={fieldClass(!!errors.parentName)}
                  />
                  {errors.parentName && <p className="mt-1 text-xs text-red-200">{errors.parentName}</p>}
                </div>

                <div>
                  <label htmlFor="parentEmail" className="mb-1 block text-sm font-medium text-white/90">
                    Email Address
                  </label>
                  <input
                    id="parentEmail"
                    type="email"
                    value={form.parentEmail}
                    onChange={(e) => setForm((prev) => ({ ...prev, parentEmail: e.target.value }))}
                    placeholder="name@email.com"
                    className={fieldClass(!!errors.parentEmail)}
                  />
                  {errors.parentEmail && <p className="mt-1 text-xs text-red-200">{errors.parentEmail}</p>}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="mobileNumber" className="mb-1 block text-sm font-medium text-white/90">
                    Mobile Number
                  </label>
                  <input
                    id="mobileNumber"
                    value={form.mobileNumber}
                    onChange={(e) => setForm((prev) => ({ ...prev, mobileNumber: e.target.value }))}
                    placeholder="+91 98XXXXXXXX"
                    className={fieldClass(!!errors.mobileNumber)}
                  />
                  {errors.mobileNumber && <p className="mt-1 text-xs text-red-200">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label htmlFor="studentName" className="mb-1 block text-sm font-medium text-white/90">
                    Student Name
                  </label>
                  <input
                    id="studentName"
                    value={form.studentName}
                    onChange={(e) => setForm((prev) => ({ ...prev, studentName: e.target.value }))}
                    placeholder="Student Name"
                    className={fieldClass(!!errors.studentName)}
                  />
                  {errors.studentName && <p className="mt-1 text-xs text-red-200">{errors.studentName}</p>}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label htmlFor="studentGrade" className="mb-1 block text-sm font-medium text-white/90">
                    Student Grade
                  </label>
                  <select
                    id="studentGrade"
                    value={form.studentGrade}
                    onChange={(e) => setForm((prev) => ({ ...prev, studentGrade: e.target.value }))}
                    className={fieldClass(!!errors.studentGrade)}
                  >
                    <option value="">Select grade</option>
                    {gradeOptions.map((grade) => (
                      <option key={grade} value={grade} className="text-slate-800">
                        {grade}
                      </option>
                    ))}
                  </select>
                  {errors.studentGrade && <p className="mt-1 text-xs text-red-200">{errors.studentGrade}</p>}
                </div>

                <div>
                  <label htmlFor="preferredCallback" className="mb-1 block text-sm font-medium text-white/90">
                    Preferred Callback Time
                  </label>
                  <input
                    id="preferredCallback"
                    value={form.preferredCallback}
                    onChange={(e) => setForm((prev) => ({ ...prev, preferredCallback: e.target.value }))}
                    placeholder="e.g. 4 PM - 6 PM"
                    className={fieldClass(false)}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-white/90">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Share your query, interests, or any specific requirement."
                  className={fieldClass(false)}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="interactive group relative inline-flex w-full items-center justify-center overflow-hidden rounded-full border border-gold/70 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-glow disabled:cursor-not-allowed disabled:opacity-70"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, rgba(217,180,74,0.42), rgba(11,93,59,0.95) 45%)"
                }}
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                  {sending ? "Submitting..." : "Submit Enquiry"}
                </span>
              </button>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={gmailHref}
                  target="_blank"
                  rel="noreferrer"
                  className="interactive inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Open Gmail
                </a>
                <a
                  href={mailtoHref}
                  className="interactive inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/20"
                >
                  Open Email App
                </a>
              </div>
              <p className="text-xs text-white/75">Your enquiry will be sent to: adityakumarasd852@gmail.com</p>
            </form>
          </div>
        </div>
      </section>

      <section className="section-pad relative overflow-hidden bg-forest py-16">
        <div className="absolute inset-0 opacity-25">
          <div className="absolute inset-y-0 w-[200%] animate-wave bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.26)_35%,transparent_70%)]" />
        </div>
        <div className="relative mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 text-white md:flex-row md:items-center">
          <div>
            <h2 className="mb-2 text-4xl">Need Help with Admissions?</h2>
            <p className="text-white/85">Speak directly with our counseling desk.</p>
          </div>
          <a href="tel:+919876543210" className="interactive inline-flex items-center gap-2 text-white">
            <PhoneCall className="h-5 w-5 text-gold" />
            +91 98765 43210
          </a>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
