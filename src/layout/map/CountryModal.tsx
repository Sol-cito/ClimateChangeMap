import "./CountryModal.scss";
import Modal from "react-modal";

export interface CountryModalProps {
  show: boolean;
  countryCode: string;
}

const CountryModal = (props: CountryModalProps) => {
  return (
    <>
      <Modal isOpen={props.show} />
    </>
  );
};

export default CountryModal;
