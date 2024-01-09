import { useEffect } from "react";
import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Clients from "../../components/Clients/Clients";
import Impact from "../../components/Impact/Impact";
import NewsEvent from "../../components/NewsEvent/NewsEvent";
import ProductsComp from "../../components/Product/ProductsComp";
import { useGetThemesQuery } from "../../Redux/theme/themeApi";

export default function Home() {
  window.scroll(0, 0);
  const { data } = useGetThemesQuery();
  const colors = data?.data[0];

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      colors?.primary
    );
    document.documentElement.style.setProperty(
      "--secondary-color",
      colors?.secondary
    );
    document.documentElement.style.setProperty(
      "--accent-color",
      colors?.accent
    );
    document.documentElement.style.setProperty(
      "--neutral-color",
      colors?.neutral
    );
    document.documentElement.style.setProperty(
      "--neutralContent-color",
      colors?.neutralContent
    );
  }, [colors]);

  return (
    <>
      <Banner />
      <About />
      <Impact />
      <ProductsComp />
      <NewsEvent />
      <Clients />
    </>
  );
}
