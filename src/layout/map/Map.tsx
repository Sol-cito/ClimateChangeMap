import React, { useEffect, useState } from "react";
import { WorldMap } from "react-svg-worldmap";
import CountryDataService from "../../service/CountryDataService";
import CountryModal from "../modal/CountryModal";
import "./Map.scss";
import { CountryCodeResponse, CountryData } from "./model/CountryData.model";

const countryData: CountryData[] = [];
const countryDataService = new CountryDataService();

interface MapProps {
  setCountryNameForCard: Function;
}

const Map = (props: MapProps) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [isLoadingCodeOver, setCodeLoading] = useState<boolean>(false);

  useEffect(() => {
    countryDataService.getAllCountryCode().then((res) => {
      if (res) {
        res.data.forEach((item: CountryCodeResponse) => {
          countryData.push({
            country: item.alpha2Code,
            value: item.numericCode,
          });
        });
      }
      setCodeLoading(true);
    });
  }, []);

  const handleOnclick = (
    countryName: string,
    countryCode: string,
    countryValue: string
  ) => {
    setShowModal(true);
    setSelectedCountryCode(countryCode);
    setSelectedCountryName(countryName);
    // props.setCountryNameForCard(countryName);
    return {};
  };

  const handleToolTip = (countryName: string) => {
    return countryName;
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
            tooltipBgColor="transparent"
            tooltipTextColor="transparent"
            onClickFunction={(
              event: React.MouseEvent<SVGElement, Event>,
              countryName: string,
              isoCode: string,
              value: string
            ) => handleOnclick(countryName, isoCode, value)}
            tooltipTextFunction={(countryName: string) =>
              handleToolTip(countryName)
            }
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
