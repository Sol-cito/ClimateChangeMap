import React, { ReactElement, useEffect, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import "./Map.scss";
import { CountryData } from "./model/CountryData.model";

const countryData = [
  { country: "cn", value: 1 },
  { country: "in", value: 3 },
  { country: "kr", value: 2 },
  { country: "us", value: 10 },
]; // TODO : 추후 이 데이터는 DB에서 가져오도록.

const Map = () => {
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
      <WorldMap
        color="green"
        size="xxl"
        data={countryData}
        onClickFunction={(
          event: React.MouseEvent<SVGElement, Event>,
          countryName: string,
          isoCode: string,
          value: string
        ) => handleOnclick(countryName, isoCode, value)}
      />
    </div>
  );
};

export default Map;
