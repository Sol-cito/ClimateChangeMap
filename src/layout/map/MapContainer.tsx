import Map from "./Map";
import "./MapContainer.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Card } from "react-bootstrap";
import { useState } from "react";

const MapContainer = () => {
  const [countryNameForCard, setCountryNameForCard] = useState("");

  return (
    <>
      <Card>{countryNameForCard}</Card>
      <TransformWrapper>
        <TransformComponent>
          <div className="slide_box">
            <div>
              <Map setCountryNameForCard={setCountryNameForCard} />
            </div>
            <div>
              <Map setCountryNameForCard={setCountryNameForCard} />
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </>
  );
};

export default MapContainer;
