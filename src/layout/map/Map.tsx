import { WorldMap } from "react-svg-worldmap"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import './Map.scss'

const countryData =
    [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
    ]

const Map = () => {
    return (
        <div className='MapWrapper'>
            <WorldMap color="blue" size="xxl" data={countryData} />
        </div>
    )
}

export default Map;