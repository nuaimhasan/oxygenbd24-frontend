import About from "../../components/About/About";
import Banner from "../../components/Banner/Banner";
import Clients from "../../components/Clients/Clients";
import Impact from "../../components/Impact/Impact";
import Team from "../../components/Team/Team";

export default function Home() {
  window.scroll(0, 0);
  return (
    <>
      <Banner />
      <About />
      <Impact />
      <Team />
      <Clients />
    </>
  );
}
