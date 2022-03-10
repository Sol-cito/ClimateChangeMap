import ApexCharts from "react-apexcharts";
import { CountryTemperature } from "../map/model/CountryData.model";

export interface CountryModalContentProps {
  countryName: string;
  temperatureData: CountryTemperature | null;
}

const CountryModalContent = (props: CountryModalContentProps) => {
  const yearList = Object.keys(props.temperatureData || [])
    .map((ele) => {
      return ele.substring(5, 9);
    })
    .filter((ele, idx) => (idx + 1) % 5 == 0);
  const temperatureList = Object.values(props.temperatureData || []).filter(
    (ele, idx) => (idx + 1) % 5 == 0
  );

  return (
    <>
      <h1>{props.countryName}</h1>
      <div>
        <ApexCharts
          type="line"
          series={[
            {
              name: "Celsius Degree",
              data: temperatureList,
            },
          ]}
          width="1100px"
          height="550px"
          options={{
            chart: {
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              categories: yearList,
            },
            stroke: {
              curve: "smooth",
            },
          }}
        />
      </div>
    </>
  );
};

export default CountryModalContent;
