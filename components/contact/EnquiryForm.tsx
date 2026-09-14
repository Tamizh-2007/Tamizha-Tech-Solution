"use client";

import { FormEvent, useState } from "react";

export default function EnquiryForm() {
  const [loading,setLoading]=useState(false);
  const [message,setMessage]=useState("");

  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); setLoading(true); setMessage("");
    const form=new FormData(e.currentTarget);
    try {
      const res=await fetch("/api/enquiries",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(form))});
      const data=await res.json();
      setMessage(data.message ?? "Your enquiry has been received.");
      if(res.ok) e.currentTarget.reset();
    } catch { setMessage("Something went wrong. Please contact us directly at tamizharasan740@gmail.com."); }
    finally { setLoading(false); }
  }

  return <form onSubmit={submit} className="space-y-5">
    <div className="grid gap-5 md:grid-cols-2">
      <input required name="name" placeholder="Full Name" className="rounded-xl border p-4 outline-none focus:border-blue-600"/>
      <input required type="email" name="email" placeholder="Email" className="rounded-xl border p-4 outline-none focus:border-blue-600"/>
      <input required name="phone" placeholder="Phone" className="rounded-xl border p-4 outline-none focus:border-blue-600"/>
      <input name="company" placeholder="Company / Organization" className="rounded-xl border p-4 outline-none focus:border-blue-600"/>
    </div>
    <select name="service" className="w-full rounded-xl border p-4"><option>Web Development</option><option>Web Design</option><option>Application Development</option><option>Software Solutions</option><option>Digital Solutions</option><option>Maintenance & Support</option></select>
    <select name="budget" className="w-full rounded-xl border p-4"><option>Budget Range</option><option>Below ₹25,000</option><option>₹25,000 – ₹50,000</option><option>₹50,000 – ₹1,00,000</option><option>₹1,00,000+</option></select>
    <textarea required name="description" placeholder="Project Description" rows={6} className="w-full rounded-xl border p-4 outline-none focus:border-blue-600"/>
    <button disabled={loading} className="rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white disabled:opacity-60">{loading?"Sending...":"Send Enquiry"}</button>
    {message && <p className="rounded-xl bg-slate-100 p-4 text-slate-700">{message}</p>}
  </form>;
}