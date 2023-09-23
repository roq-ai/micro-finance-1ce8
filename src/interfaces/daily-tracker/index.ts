import { GetQueryInterface } from 'interfaces';

export interface DailyTrackerInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface DailyTrackerGetQueryInterface extends GetQueryInterface {
  id?: string;
}
