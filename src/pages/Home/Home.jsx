import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Clients from "../../components/Clients/Clients";
import Impact from "../../components/Impact/Impact";
import NewsEvent from "../../components/NewsEvent/NewsEvent";
import ProductsComp from "../../components/Product/ProductsComp";

export default function Home() {
  window.scroll(0, 0);
  return (
    <>
      <Banner />
      <About />
      <Impact />
      <ProductsComp />
      {/* <NewsEvent /> */}
      <Clients />
    </>
  );
}
