import axios from "axios";
import React, { ReactElement, useEffect, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import "./Map.scss";
import { CountryCodeResponse, CountryData } from "./model/CountryData.model";

const countryData: CountryData[] = [];

const Map = () => {
  useEffect(() => {
    getAllCountryCode();
  }, []);

  const [isLoadingCodeOver, setCodeLoading] = useState<boolean>(false);

  const getAllCountryCode = async () => {
    try {
      const res = await axios.get("http://localhost:3100/countryCode/allCode");
      res.data.forEach((item: CountryCodeResponse) => {
        countryData.push({ country: item.alpha2Code, value: item.numericCode });
      });
    } catch (error) {
      alert(error);
    }
    setCodeLoading(true);
  };

  const handleOnclick = (
    countryName: string,
    countryCode: string,
    countryValue: string
  ) => {
    console.log("선택 국가 : " + countryCode);
    // TODO : 선택 국가 모달 띄우기
    return {};
  };

  return (
    <div className="MapWrapper">
      {isLoadingCodeOver && (
        <WorldMap
          color="red"
          size="xxl"
          data={countryData}
          onClickFunction={(
            event: React.MouseEvent<SVGElement, Event>,
            countryName: string,
            isoCode: string,
            value: string
          ) => handleOnclick(countryName, isoCode, value)}
        />
      )}
    </div>
  );
};

export default Map;
