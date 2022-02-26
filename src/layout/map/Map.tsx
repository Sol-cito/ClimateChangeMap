import React, { useEffect, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import CountryDataService from "../../service/CountryDataService";
import CountryModal from "../modal/CountryModal";
import "./Map.scss";
import { CountryCodeResponse, CountryData } from "./model/CountryData.model";

const countryData: CountryData[] = [];
const countryDataService = new CountryDataService();

const Map = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");

  useEffect(() => {
    countryDataService.getAllCountryCode().then((res) => {
      res.data.forEach((item: CountryCodeResponse) => {
        countryData.push({
          country: item.alpha2Code,
          value: item.numericCode,
        });
      });
      setCodeLoading(true);
    });
  }, []);

  const [isLoadingCodeOver, setCodeLoading] = useState<boolean>(false);

  const handleOnclick = (
    countryName: string,
    countryCode: string,
    countryValue: string
  ) => {
    setShowModal(true);
    setSelectedCountryCode(countryCode);
    setSelectedCountryName(countryName);
    return {};
  };

  const modalOnClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="MapWrapper">
        {isLoadingCodeOver && (
          <WorldMap
            color="green"
            backgroundColor="#b3e4ff"
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
      <CountryModal
        show={showModal}
        countryCode={selectedCountryCode}
        onClose={modalOnClose}
        className="CountryModal"
        overlayClassName="CountryModalOverLay"
        countryName={selectedCountryName}
      />
    </>
  );
};

export default Map;
