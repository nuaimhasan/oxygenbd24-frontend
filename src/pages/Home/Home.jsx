import Alliances from "../../components/Alliances/Alliances";
import Banner from "../../components/Banner/Banner";
import Impact from "../../components/Impact/Impact";
import Milestone from "../../components/Milestone/Milestone";
import Slogan from "../../components/Slogan/Slogan";
import Team from "../../components/Team/Team";

export default function Home() {
  return (
    <>
      <Banner />
      <Slogan />
      <Impact />
      <Milestone />
      <Team />
      <Alliances />
    </>
  );
}
