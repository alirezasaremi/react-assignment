

import GraphModel from "../components/GraphModel";
import MasterLayout from "../hoc/MasterLayout";
import { useSectionStore } from "../store/useSectionStore";
import CombustionChamberChart from "../components/charts/CombustionChamberChart";
import TurbineChart from "../components/charts/TurbineChart";
import CompressorChart from "../components/charts/CompressorChart";


function Dashboard() {
  const { selectedSection } = useSectionStore((state) => state);

  return (
    <MasterLayout>
      <h2>Dashboard</h2>
      <GraphModel />
      <div className="chart-container">
        {selectedSection === "combustion-chamber" && <CombustionChamberChart />}
        {selectedSection === "turbine" && <TurbineChart />}
        {selectedSection === "compressor" && <CompressorChart />}
      </div>
    </MasterLayout>
  );
}

export default Dashboard;
