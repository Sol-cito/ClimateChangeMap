import ApexCharts from "react-apexcharts";
import { CountryTemperature } from "../map/model/CountryData.model";

export interface CountryModalContentProps {
  countryName: string;
  temperatureData: CountryTemperature | null;
}

const CountryModalContent = (props: CountryModalContentProps) => {
  const yearList = Object.keys(props.temperatureData || []);
  const temperatureList = Object.values(props.temperatureData || []);

  return (
    <>
      <h1>{props.countryName}</h1>
      <div>
        <ApexCharts
          type="line"
          series={[
            {
              name: "yearly temperature",
              data: temperatureList,
            },
          ]}
          options={{
            xaxis: {
              categories: yearList,
            },
          }}
        />
      </div>
    </>
  );
};

export default CountryModalContent;
