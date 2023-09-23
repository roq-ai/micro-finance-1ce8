import axios from 'axios';
import queryString from 'query-string';
import { LoanClosureInterface, LoanClosureGetQueryInterface } from 'interfaces/loan-closure';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLoanClosures = async (
  query?: LoanClosureGetQueryInterface,
): Promise<PaginatedInterface<LoanClosureInterface>> => {
  const response = await axios.get('/api/loan-closures', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLoanClosure = async (loanClosure: LoanClosureInterface) => {
  const response = await axios.post('/api/loan-closures', loanClosure);
  return response.data;
};

export const updateLoanClosureById = async (id: string, loanClosure: LoanClosureInterface) => {
  const response = await axios.put(`/api/loan-closures/${id}`, loanClosure);
  return response.data;
};

export const getLoanClosureById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/loan-closures/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLoanClosureById = async (id: string) => {
  const response = await axios.delete(`/api/loan-closures/${id}`);
  return response.data;
};
