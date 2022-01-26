import "./CountryModal.scss";
import Modal from "react-modal";
import CountryModalContent from "./CountryModalContent";

export interface CountryModalProps {
  show: boolean;
  countryCode: string;
  onClose: Function;
  className: string;
  overlayClassName: string;
}

const CountryModal = (props: CountryModalProps) => {
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
        <CountryModalContent countryName="temp" />
      </Modal>
    </>
  );
};

export default CountryModal;
