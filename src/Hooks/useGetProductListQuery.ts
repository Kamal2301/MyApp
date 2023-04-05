import Axios, { AxiosResponse } from 'axios';
import {useQuery} from 'react-query';
import { PRODUCT_RESPONSE } from '../CommonTypes/ResponseType';

export const PRODUCT_LIST_QUERY_KEY = '/fetcher/';



const getProductList = (): Promise<AxiosResponse<PRODUCT_RESPONSE>> => {
  return fetcher()
};

const fetcher = async () => {
  return await Axios.request({
    url: 'https://dummyjson.com/products',
    method: 'GET',
  });
};

function useGetProductListQuery() {
  return useQuery(PRODUCT_LIST_QUERY_KEY, getProductList);
}

export default useGetProductListQuery;
