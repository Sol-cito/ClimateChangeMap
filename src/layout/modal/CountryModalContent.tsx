import { CountryTemperature } from "../map/model/CountryData.model";

export interface CountryModalContentProps {
  countryName: string;
  tempData: CountryTemperature | null;
}

const CountryModalContent = (props: CountryModalContentProps) => {
  return (
    <>
      <h1>{props.countryName}</h1>
      {props.tempData
        ? Object.keys(props.tempData).forEach((key) => {
            console.log(key);
          })
        : null}
    </>
  );
};

export default CountryModalContent;
