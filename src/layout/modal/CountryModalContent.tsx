export interface CountryModalContentProps {
  countryName: string;
}

const CountryModalContent = (props: CountryModalContentProps) => {
  return <>{props.countryName}</>;
};

export default CountryModalContent;
