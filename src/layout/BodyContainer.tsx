import MapContainer from "./map/MapContainer";
import SidebarContainer from "./sidebar/SidebarContainer";

const BodyContainer = () => {
    return (
        <div id='BodyContainer'>
            <SidebarContainer />
            <MapContainer />
        </div>
    )
}

export default BodyContainer;