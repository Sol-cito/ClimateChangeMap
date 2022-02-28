import axios from "axios";

interface props {
  url: string;
}

export default class BaseService {
  protected axiosAsyncRequest = async (props: props) => {
    let response: any;
    try {
      let baseUrl: string = "http://localhost:3100";
      response = await axios.get(baseUrl + props.url);
    } catch (error) {
      alert(error); //TO-DO : 공통 에러 처리 기능 구현
    }
    return response;
  };
}
