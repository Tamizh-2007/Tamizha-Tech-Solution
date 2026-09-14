import Link from "next/link";

export default function AdminLogin() {
  return <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6"><div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"><h1 className="text-2xl font-bold">Tamizha Tech Solution</h1><p className="mt-2 text-slate-500">Admin Portal</p><form className="mt-8 space-y-4"><input type="email" placeholder="Admin email" className="w-full rounded-xl border p-4"/><input type="password" placeholder="Password" className="w-full rounded-xl border p-4"/><button className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white">Sign In</button></form><Link href="/" className="mt-6 block text-center text-sm text-slate-500">← Back to website</Link></div></main>;
}