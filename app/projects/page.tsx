import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Projects() {
  return <><Navbar/><main className="mx-auto max-w-7xl px-6 py-24"><p className="font-semibold text-blue-600">PORTFOLIO</p><h1 className="mt-3 text-5xl font-bold">Our Projects.</h1><div className="mt-14 rounded-3xl border border-dashed p-16 text-center"><h2 className="text-2xl font-bold">No projects published yet.</h2><p className="mt-3 text-slate-600">Our portfolio is growing. Check back soon to explore our latest work.</p></div></main><Footer/></>;
}