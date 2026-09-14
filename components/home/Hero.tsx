"use client";

import Link from "next/link";
import { ArrowRight, Code2, Globe2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return <section className="relative overflow-hidden">
    <div className="absolute inset-0 -z-10"><div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-3xl" /></div>
    <div className="mx-auto grid min-h-[80vh] max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
      <motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7}}>
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"><Sparkles size={16}/>Technology • Creativity • Innovation</div>
        <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-950 md:text-6xl">Building Digital Solutions That <span className="block text-blue-600">Move Businesses Forward.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Tamizha Tech Solution delivers modern web, software and digital solutions designed to help businesses build, grow and scale.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/contact" className="group flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition hover:bg-blue-700">Start a Project <ArrowRight size={18} className="transition group-hover:translate-x-1"/></Link>
          <Link href="/services" className="rounded-xl border border-slate-300 px-6 py-4 font-semibold text-slate-800 transition hover:border-blue-600 hover:text-blue-600">Explore Services</Link>
        </div>
      </motion.div>
      <motion.div initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{duration:.8}} className="relative">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
          <div className="mb-6 flex items-center justify-between"><span className="font-semibold">Digital Workspace</span><div className="flex gap-2"><span className="h-3 w-3 rounded-full bg-red-400"/><span className="h-3 w-3 rounded-full bg-yellow-400"/><span className="h-3 w-3 rounded-full bg-green-400"/></div></div>
          <div className="grid gap-4">
            <div className="rounded-2xl bg-slate-950 p-6 text-white"><Code2 className="mb-4 text-blue-400"/><p className="text-sm text-slate-400">Building</p><h3 className="mt-1 text-2xl font-semibold">Modern Digital Experiences</h3></div>
            <div className="grid grid-cols-2 gap-4"><div className="rounded-2xl border border-slate-200 p-5"><Globe2 className="mb-3 text-blue-600"/><p className="font-semibold">Web Solutions</p></div><div className="rounded-2xl border border-slate-200 p-5"><Sparkles className="mb-3 text-purple-600"/><p className="font-semibold">Creative Technology</p></div></div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>;
}