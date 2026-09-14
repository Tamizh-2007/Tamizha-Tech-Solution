import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import EnquiryForm from "@/components/contact/EnquiryForm";

export default function Contact() {
  return <><Navbar/><main className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2"><div><p className="font-semibold text-blue-600">CONTACT</p><h1 className="mt-3 text-5xl font-bold">Let's Build Something Great Together.</h1><p className="mt-6 text-lg leading-8 text-slate-600">Tell us about your requirement and we'll get back to you.</p><div className="mt-10 space-y-5"><a className="block font-semibold" href="tel:8778029482">8778029482</a><a className="block font-semibold" href="mailto:tamizharasan740@gmail.com">tamizharasan740@gmail.com</a></div></div><div className="rounded-3xl border p-7 shadow-sm"><EnquiryForm/></div></main><Footer/></>;
}