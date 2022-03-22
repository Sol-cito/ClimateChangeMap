import MapContainer from "./map/MapContainer";
import SidebarContainer from "./sidebar/SidebarContainer";
import "./BodyContainer.scss";

const BodyContainer = () => {
  return (
    <div className="BodyContainer">
      {/* <SidebarContainer /> */}
      <MapContainer />
    </div>
  );
};

export default BodyContainer;
