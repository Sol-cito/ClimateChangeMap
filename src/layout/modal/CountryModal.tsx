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
        console.log(res.data[0]["2000"]);
        setCountryTemperature(res.data[0]);
      };
      fetchData();
    }
  }, [props.countryCode]);

  return (
    <>
      <Modal // TO-DO : Modal 띄울 때 transition 효과 넣기
        isOpen={props.show}
        shouldCloseOnEsc={true}
        preventScroll={true}
        onRequestClose={() => props.onClose()}
        className={props.className}
        overlayClassName={props.overlayClassName}
      >
        <CountryModalContent
          countryName={props.countryName}
          tempData={countryTemperature}
        />
      </Modal>
    </>
  );
};

export default CountryModal;
