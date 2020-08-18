import axios from "axios";
import { ResponseData } from "../@types/service";
import { API_URI } from '../constants'

const headers = { Authorization: `token ${process.env.REACT_APP_GIT_TOKEN}` };

const fetchData = async (
  keyword: string,
  category: string,
): Promise<ResponseData> => {
  return axios.get(`${API_URI}/${category}?q=${keyword}`, { headers }).then(res => res.data)
};

export default fetchData;

