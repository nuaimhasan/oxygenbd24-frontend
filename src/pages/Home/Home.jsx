import "./Home.css";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import About from "../../components/About/About";
import Product from "../../components/Product/Product";
import Contact from "../../components/Contact/Contact";
import { useEffect } from "react";
import Rental from "../../components/Rental/Rental";

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
      <Rental />
      <Contact />
    </>
  );
}
