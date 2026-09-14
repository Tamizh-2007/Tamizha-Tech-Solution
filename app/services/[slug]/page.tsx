import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

const data: Record<string,{title:string;description:string}> = {
  "web-development": {title:"Web Development",description:"Modern, responsive and high-performance websites built around your requirements."},
  "web-design": {title:"Web Design",description:"Creative UI/UX and professional digital experiences designed around your brand."},
  "application-development": {title:"Application Development",description:"Custom applications designed to solve real business and user problems."},
  "software-solutions": {title:"Software Solutions",description:"Business-focused software and digital systems tailored to your requirements."},
  "digital-solutions": {title:"Digital Solutions",description:"Technology solutions that improve digital presence and workflow."},
  "maintenance-support": {title:"Maintenance & Support",description:"Continuous technical assistance, updates and improvements."}
};

export default async function ServiceDetail({params}:{params:Promise<{slug:string}>}) {
  const {slug}=await params; const service=data[slug] ?? {title:"Service",description:"Discuss your requirement with Tamizha Tech Solution."};
  return <><Navbar/><main className="mx-auto max-w-5xl px-6 py-24"><p className="font-semibold text-blue-600">OUR SERVICE</p><h1 className="mt-3 text-5xl font-bold">{service.title}</h1><p className="mt-8 max-w-3xl text-xl leading-8 text-slate-600">{service.description}</p><div className="mt-14 grid gap-6 md:grid-cols-2"><div className="rounded-2xl border p-7"><h2 className="text-2xl font-bold">What We Provide</h2><ul className="mt-5 space-y-3 text-slate-600"><li>• Requirement discovery</li><li>• Planning and design</li><li>• Development and testing</li><li>• Launch and support</li></ul></div><div className="rounded-2xl bg-slate-950 p-7 text-white"><h2 className="text-2xl font-bold">Have a project in mind?</h2><p className="mt-4 text-slate-300">Let's discuss your requirement and find the right solution.</p><Link href="/contact" className="mt-7 inline-block rounded-xl bg-blue-600 px-6 py-3 font-semibold">Discuss Your Requirement</Link></div></div></main><Footer/></>;
}