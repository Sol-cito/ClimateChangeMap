export interface CountryCodeResponse {
  id: number;
  alpha2Code: string;
  alpha3Code: string;
  numericCode: number;
}

export interface CountryData {
  country: string;
  value: number;
}
