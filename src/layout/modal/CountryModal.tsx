import "./CountryModal.scss";
import Modal from "react-modal";
import CountryModalContent from "./CountryModalContent";
import { useEffect, useState } from "react";
import CountryDataService from "../../service/CountryDataService";

export interface CountryModalProps {
  show: boolean;
  countryCode: string;
  onClose: Function;
  className: string;
  overlayClassName: string;
  countryName: string;
}

const CountryModal = (props: CountryModalProps) => {
  const countryDataService = new CountryDataService();
  const [countryTemperature, setCountryTemperature] = useState(null);

  useEffect(() => {
    if (props.countryCode) {
      const fetchData = async () => {
        const res = await countryDataService.getCountryTempInfo(
          props.countryCode
        );
        setCountryTemperature(res.data[0]);
      };
      fetchData();
    }
  }, [props.countryCode]);

  return (
    <>
      <Modal // TO-DO : 모달 닫기버튼 추가
        isOpen={props.show}
        shouldCloseOnEsc={true}
        preventScroll={true}
        onRequestClose={() => props.onClose()}
        className={props.className}
        overlayClassName={props.overlayClassName}
      >
        <CountryModalContent
          countryName={props.countryName}
          temperatureData={countryTemperature}
        />
      </Modal>
    </>
  );
};

export default CountryModal;
