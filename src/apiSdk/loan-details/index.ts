import axios from 'axios';
import queryString from 'query-string';
import { LoanDetailsInterface, LoanDetailsGetQueryInterface } from 'interfaces/loan-details';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLoanDetails = async (
  query?: LoanDetailsGetQueryInterface,
): Promise<PaginatedInterface<LoanDetailsInterface>> => {
  const response = await axios.get('/api/loan-details', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLoanDetails = async (loanDetails: LoanDetailsInterface) => {
  const response = await axios.post('/api/loan-details', loanDetails);
  return response.data;
};

export const updateLoanDetailsById = async (id: string, loanDetails: LoanDetailsInterface) => {
  const response = await axios.put(`/api/loan-details/${id}`, loanDetails);
  return response.data;
};

export const getLoanDetailsById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/loan-details/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLoanDetailsById = async (id: string) => {
  const response = await axios.delete(`/api/loan-details/${id}`);
  return response.data;
};
