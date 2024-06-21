import { Button } from "antd";
import { useSectionStore } from "../store/useSectionStore";

const GraphModel = () => {
  const { updateSelectedSection } = useSectionStore((state) => state);

  return (
    <div className="graph-model">
      <div className="combustion-chamber">
        <Button
          type="primary"
          style={{ width: "100%", height: "100%" }}
          onClick={() => updateSelectedSection("combustion-chamber")}
        >
          محفظه احتراق
        </Button>
      </div>
      <div className="flex-rb">
        <div className="turbine">
          <Button
            type="primary"
            style={{ width: "100%", height: "100%" }}
            onClick={() => updateSelectedSection("turbine")}
          >
            توربین
          </Button>
        </div>
        <div className="compressor">
          <Button
            type="primary"
            style={{ width: "100%", height: "100%" }}
            onClick={() => updateSelectedSection("compressor")}
          >
            کمپرسور
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GraphModel;
