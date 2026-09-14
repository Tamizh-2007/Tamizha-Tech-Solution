"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"], ["About", "/about"], ["Services", "/services"],
    ["Projects", "/projects"], ["Careers", "/careers"], ["Contact", "/contact"]
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          TAMIZHA<span className="text-blue-600"> TECH</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([name, href]) => <Link key={name} href={href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">{name}</Link>)}
          <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Start a Project</Link>
        </nav>
        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-6 py-6 md:hidden"><div className="flex flex-col gap-5">
        {links.map(([name, href]) => <Link key={name} href={href} onClick={() => setOpen(false)} className="font-medium text-slate-700">{name}</Link>)}
        <Link href="/contact" className="rounded-xl bg-blue-600 px-5 py-3 text-center font-semibold text-white">Start a Project</Link>
      </div></div>}
    </header>
  );
}