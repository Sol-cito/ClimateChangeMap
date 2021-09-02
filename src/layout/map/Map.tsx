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
            <TransformWrapper>
                <TransformComponent>
                    <WorldMap color="blue" title="This is My Map" size="xxl" data={countryData} />
                </TransformComponent>
            </TransformWrapper>
        </div>
    )
}

export default Map;