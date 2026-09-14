import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Process from "@/components/home/Process";

export default function Home() {
  return <><Navbar/><main><Hero/><ServicesPreview/><Process/></main><Footer/></>;
}