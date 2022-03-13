import ApexCharts from "react-apexcharts";
import { CountryTemperature } from "../map/model/CountryData.model";

export interface CountryModalContentProps {
  countryName: string;
  temperatureData: CountryTemperature | null;
}

const CountryModalContent = (props: CountryModalContentProps) => {
  const yearList = [
    "1900's",
    "1910's",
    "1920's",
    "1930's",
    "1940's",
    "1950's",
    "1960's",
    "1970's",
    "1980's",
    "1990's",
    "2000's",
    "2010's",
  ];

  let temperatureList = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  Object.values(props.temperatureData || []).forEach((ele, idx) =>
    idx <= 8
      ? (temperatureList[0] += ele)
      : (temperatureList[1 + Math.floor((idx - 9) / 10)] += ele)
  );

  temperatureList = temperatureList.map((ele) => {
    return ele / 10;
  });

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
