import Link from "next/link";
import { Globe, Palette, Smartphone, Code2, Wrench, ArrowUpRight } from "lucide-react";

const services = [
  ["Web Development","Modern, responsive and high-performance websites for businesses and organizations.",Globe],
  ["Web Design","Creative UI/UX and professional digital experiences designed around your brand.",Palette],
  ["Application Development","Custom applications designed to solve real business and user problems.",Smartphone],
  ["Software Solutions","Business-focused software and digital systems tailored to your requirements.",Code2],
  ["Digital Solutions","Technology solutions that improve your digital presence and workflow.",Globe],
  ["Maintenance & Support","Continuous technical assistance, updates and improvements.",Wrench]
];

export default function ServicesPreview() {
  return <section className="bg-slate-50 py-24"><div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="font-semibold text-blue-600">WHAT WE DO</p><h2 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">Technology Built Around Your Vision.</h2></div><Link href="/services" className="font-semibold text-blue-600">View All Services →</Link></div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([title,description,Icon]) => <div key={title as string} className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl"><div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon size={24}/></div><h3 className="text-xl font-bold">{title as string}</h3><p className="mt-3 leading-7 text-slate-600">{description as string}</p><Link href="/services" className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600">Explore Service <ArrowUpRight size={18}/></Link></div>)}</div>
  </div></section>;
}