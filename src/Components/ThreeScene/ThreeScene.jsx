import { useState } from "react";

import steelLayout from "../../assets/steel-layout.png";

import cokeOvenImg from "../../assets/process/coke-oven.jpg";
import sinterPlantImg from "../../assets/process/sinter-plant.jpg";
import blastFurnaceImg from "../../assets/process/blast-furnace.jpg";
import bofImg from "../../assets/process/bof.jpg";
import billetImg from "../../assets/process/billet.jpg";
import merchantMillImg from "../../assets/process/merchant-mill.jpg";

import "./ThreeScene.css";
import { MoveRight } from "lucide-react";

function ThreeScene() {
  const processData = [
    {
      id: 1,
      title: "Coke Oven",
      image: cokeOvenImg,

      description:
        "Coal is converted into coke using high-temperature carbonization for blast furnace operations.",

      temperature: "1100°C",
      efficiency: "92%",
      production: "4.5M Tons",
      status: "Operational",

      top: "28%",
      left: "32%",
    },

    {
      id: 2,
      title: "Sinter Plant",
      image: sinterPlantImg,

      description:
        "Iron ore fines are agglomerated into sinter feed for blast furnace charging.",

      temperature: "980°C",
      efficiency: "89%",
      production: "3.8M Tons",
      status: "Stable",

      top: "52%",
      left: "38%",
    },

    {
      id: 3,
      title: "Blast Furnace",
      image: blastFurnaceImg,

      description:
        "Molten iron is produced through reduction of iron ore using coke and hot air.",

      temperature: "1500°C",
      efficiency: "95%",
      production: "6.2M Tons",
      status: "Running",

      top: "35%",
      left: "55%",
    },

    {
      id: 4,
      title: "BOF Converter",
      image: bofImg,

      description:
        "Basic Oxygen Furnace converts molten iron into steel by oxygen refining.",

      temperature: "1650°C",
      efficiency: "97%",
      production: "5.4M Tons",
      status: "Active",

      top: "35%",
      left: "70%",
    },

    {
      id: 5,
      title: "Billet Casting",
      image: billetImg,

      description:
        "Continuous casting process creates high-quality steel billets for rolling.",

      temperature: "1200°C",
      efficiency: "93%",
      production: "4.9M Tons",
      status: "Casting",

      top: "75%",
      left: "48%",
    },

    {
      id: 6,
      title: "Merchant Mill",
      image: merchantMillImg,

      description:
        "Final rolling and shaping operations for industrial steel products.",

      temperature: "1050°C",
      efficiency: "91%",
      production: "7.1M Tons",
      status: "Production",

      top: "66%",
      left: "68%",
    },
  ];

  const [selectedProcess, setSelectedProcess] = useState(processData[0]);

  return (
    <section className="plant-section">
      <div className="plant-wrapper">
        {/* LEFT PANEL */}

        <div className="info-panel">
          <h2>{selectedProcess.title}</h2>

          <p>{selectedProcess.description}</p>

          {/* IMAGE */}

          <div className="machine-image-box">
            <img
              src={selectedProcess.image}
              alt={selectedProcess.title}
              className="machine-image"
            />
          </div>

          {/* STATS */}

          <div className="stats-grid">
            <div className="stat-card">
              <span>Temperature</span>
              <h3>{selectedProcess.temperature}</h3>
            </div>

            <div className="stat-card">
              <span>Efficiency</span>
              <h3>{selectedProcess.efficiency}</h3>
            </div>

            <div className="stat-card">
              <span>Production</span>
              <h3>{selectedProcess.production}</h3>
            </div>

            <div className="stat-card">
              <span>Status</span>
              <h3>{selectedProcess.status}</h3>
            </div>
          </div>
          <div className="mt-2 flex dashboard-btn gap-4 items-center justify-center font-inter tracking-widest">

          

          Check in Dashboard <MoveRight />
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="visual-panel">
          <div className="plant-image-wrapper">
            <img src={steelLayout} alt="Steel Plant" className="plant-image" />

            {/* NODES */}

            {processData.map((item) => (
              <button
                key={item.id}
                className={`plant-node ${
                  selectedProcess.id === item.id ? "active-node" : ""
                }`}
                style={{
                  top: item.top,
                  left: item.left,
                }}
                onClick={() => setSelectedProcess(item)}
              >
                {item.id}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreeScene;
