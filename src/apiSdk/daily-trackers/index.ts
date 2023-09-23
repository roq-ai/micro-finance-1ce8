import axios from 'axios';
import queryString from 'query-string';
import { DailyTrackerInterface, DailyTrackerGetQueryInterface } from 'interfaces/daily-tracker';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getDailyTrackers = async (
  query?: DailyTrackerGetQueryInterface,
): Promise<PaginatedInterface<DailyTrackerInterface>> => {
  const response = await axios.get('/api/daily-trackers', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createDailyTracker = async (dailyTracker: DailyTrackerInterface) => {
  const response = await axios.post('/api/daily-trackers', dailyTracker);
  return response.data;
};

export const updateDailyTrackerById = async (id: string, dailyTracker: DailyTrackerInterface) => {
  const response = await axios.put(`/api/daily-trackers/${id}`, dailyTracker);
  return response.data;
};

export const getDailyTrackerById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/daily-trackers/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDailyTrackerById = async (id: string) => {
  const response = await axios.delete(`/api/daily-trackers/${id}`);
  return response.data;
};
