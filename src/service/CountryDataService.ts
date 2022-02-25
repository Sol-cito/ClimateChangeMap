import BaseService from "./BaseService";

export default class CountryDataService extends BaseService {
  public getAllCountryCode = async () => {
    const requestProps = {
      url: "/countryCode/allCode",
    };

    return this.axiosAsyncRequest(requestProps);
  };

  public getAlpha3CodeByCountryCode = async (countryCode: string) => {
    const requestProps = {
      url: "/countryCode/" + countryCode,
    };

    return this.axiosAsyncRequest(requestProps);
  };
}
