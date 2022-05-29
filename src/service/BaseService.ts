import axios from "axios";

interface props {
  url: string;
}

export default class BaseService {
  protected axiosAsyncRequest = async (props: props) => {
    let response: any;
    try {
      if (process.env.REACT_APP_BACK_BASE_URL) {
        let baseUrl: string = process.env.REACT_APP_BACK_BASE_URL;
        response = await axios.get(baseUrl + props.url);
      }
    } catch (error) {
      alert(error); //TO-DO : 공통 에러 처리 기능 구현
    }
    return response;
  };
}
