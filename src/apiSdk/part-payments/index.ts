import axios from 'axios';
import queryString from 'query-string';
import { PartPaymentInterface, PartPaymentGetQueryInterface } from 'interfaces/part-payment';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getPartPayments = async (
  query?: PartPaymentGetQueryInterface,
): Promise<PaginatedInterface<PartPaymentInterface>> => {
  const response = await axios.get('/api/part-payments', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createPartPayment = async (partPayment: PartPaymentInterface) => {
  const response = await axios.post('/api/part-payments', partPayment);
  return response.data;
};

export const updatePartPaymentById = async (id: string, partPayment: PartPaymentInterface) => {
  const response = await axios.put(`/api/part-payments/${id}`, partPayment);
  return response.data;
};

export const getPartPaymentById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/part-payments/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePartPaymentById = async (id: string) => {
  const response = await axios.delete(`/api/part-payments/${id}`);
  return response.data;
};
