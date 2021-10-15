import Map from "./Map";
import "./MapContainer.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const MapContainer = () => {
  return (
    <TransformWrapper>
      <TransformComponent>
        <div className="slide_box">
          <div>
            <Map />
          </div>
          <div>
            <Map />
          </div>
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default MapContainer;
