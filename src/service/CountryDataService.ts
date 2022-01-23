import axios from "axios";

export default class CountryDataService {
  public getAllCountryCode = async () => {
    let response: any;
    try {
      response = await axios.get("http://localhost:3100/countryCode/allCode");
    } catch (error) {
      alert(error); //TO-DO : 공통 에러 처리 기능 구현
    }
    return response;
  };
}
