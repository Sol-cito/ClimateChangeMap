import BaseService from "./BaseService";

export default class CountryDataService extends BaseService {
  public getAllCountryCode = async () => {
    const requestProps = {
      url: "/countryInfo/allCode",
    };

    return this.axiosAsyncRequest(requestProps);
  };

  public getCountryTempInfo = async (countryCode: string) => {
    const requestProps = {
      url: "/countryInfo/temperature?countryCode=" + countryCode,
    };

    return this.axiosAsyncRequest(requestProps);
  };
}
