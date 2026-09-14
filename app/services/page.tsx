import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const services = [
  ["web-development","Web Development","Modern, responsive and high-performance websites."],
  ["web-design","Web Design","Creative UI/UX and professional digital experiences."],
  ["application-development","Application Development","Custom applications for real business problems."],
  ["software-solutions","Software Solutions","Business-focused software tailored to requirements."],
  ["digital-solutions","Digital Solutions","Technology solutions for digital growth and workflow."],
  ["maintenance-support","Maintenance & Support","Technical assistance, updates and improvements."]
];

export default function Services() {
  return <><Navbar/><main className="mx-auto max-w-7xl px-6 py-24"><p className="font-semibold text-blue-600">SERVICES</p><h1 className="mt-3 text-5xl font-bold">Solutions for the Digital World.</h1><div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([slug,title,description]) => <Link key={slug} href={`/services/${slug}`} className="rounded-2xl border p-7 transition hover:-translate-y-1 hover:shadow-xl"><h2 className="text-2xl font-bold">{title}</h2><p className="mt-3 text-slate-600">{description}</p><span className="mt-6 inline-block font-semibold text-blue-600">Explore →</span></Link>)}</div></main><Footer/></>;
}