import Link from "next/link";

export default function Footer() {
  return <footer className="bg-slate-950 py-16 text-white"><div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
    <div className="md:col-span-2"><h2 className="text-2xl font-bold">TAMIZHA<span className="text-blue-500"> TECH</span></h2><p className="mt-5 max-w-md leading-7 text-slate-400">Building digital solutions with technology, creativity and purpose.</p></div>
    <div><h3 className="font-semibold">Company</h3><div className="mt-5 flex flex-col gap-3 text-slate-400"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/projects">Projects</Link><Link href="/careers">Careers</Link></div></div>
    <div><h3 className="font-semibold">Contact</h3><div className="mt-5 flex flex-col gap-3 text-slate-400"><a href="tel:8778029482">8778029482</a><a href="mailto:tamizharasan740@gmail.com">tamizharasan740@gmail.com</a></div></div>
  </div><div className="mx-auto mt-16 max-w-7xl border-t border-slate-800 px-6 pt-8 text-sm text-slate-500">© 2026 Tamizha Tech Solution. All rights reserved.</div></footer>;
}