import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Product from "../../components/Product/Product";
import Benefits from "../../components/Benefits/Benefits";
import Contact from "../../components/Contact/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Banner />
      <Services />
      <About />
      <Product />
      <Benefits />
      <Contact />
    </>
  );
}
