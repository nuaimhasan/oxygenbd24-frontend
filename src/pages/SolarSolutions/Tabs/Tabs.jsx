import EnergyEfficient from "../TabContent/EnergyEfficient";
import LightingSolutions from "../TabContent/LightingSolutions";
import PowerStorageSolutions from "../TabContent/PowerStorageSolutions";
import SolarHome from "../TabContent/SolarHome";
import SolarPanels from "../TabContent/SolarPanels";
import "./Tabs.css";
import { useState } from "react";

export default function Tabs() {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="tabs grid-cols-2 md:grid-cols-5">
        <button
          onClick={() => setTab(1)}
          className={`tab ${tab === 1 && "active"}`}
        >
          Solar Home system
        </button>
        <button
          onClick={() => setTab(2)}
          className={`tab ${tab === 2 && "active"}`}
        >
          Solar Panels
        </button>
        <button
          onClick={() => setTab(3)}
          className={`tab ${tab === 3 && "active"}`}
        >
          Power Storage Solutions
        </button>
        <button
          onClick={() => setTab(4)}
          className={`tab ${tab === 4 && "active"}`}
        >
          Energy Efficient Appliances
        </button>
        <button
          onClick={() => setTab(5)}
          className={`tab ${tab === 5 && "active"}`}
        >
          Lighting Solutions
        </button>
      </div>

      <div className="my-6">
        {tab === 1 && <SolarHome />}
        {tab === 2 && <SolarPanels />}
        {tab === 3 && <PowerStorageSolutions />}
        {tab === 4 && <EnergyEfficient />}
        {tab === 5 && <LightingSolutions />}
      </div>
    </>
  );
}
