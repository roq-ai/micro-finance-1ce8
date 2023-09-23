import axios from 'axios';
import queryString from 'query-string';
import { RepaymentScheduleInterface, RepaymentScheduleGetQueryInterface } from 'interfaces/repayment-schedule';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRepaymentSchedules = async (
  query?: RepaymentScheduleGetQueryInterface,
): Promise<PaginatedInterface<RepaymentScheduleInterface>> => {
  const response = await axios.get('/api/repayment-schedules', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRepaymentSchedule = async (repaymentSchedule: RepaymentScheduleInterface) => {
  const response = await axios.post('/api/repayment-schedules', repaymentSchedule);
  return response.data;
};

export const updateRepaymentScheduleById = async (id: string, repaymentSchedule: RepaymentScheduleInterface) => {
  const response = await axios.put(`/api/repayment-schedules/${id}`, repaymentSchedule);
  return response.data;
};

export const getRepaymentScheduleById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/repayment-schedules/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRepaymentScheduleById = async (id: string) => {
  const response = await axios.delete(`/api/repayment-schedules/${id}`);
  return response.data;
};
