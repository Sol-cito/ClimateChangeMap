import './App.css';
import { WorldMap } from "react-svg-worldmap"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const data =
  [
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
  ]

function App() {
  return (
    <div>
      <TransformWrapper>
        <TransformComponent>
          <WorldMap color="blue" title="This is My Map" size="xxl" data={data} />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
}

export default App;
