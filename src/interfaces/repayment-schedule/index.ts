import { GetQueryInterface } from 'interfaces';

export interface RepaymentScheduleInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface RepaymentScheduleGetQueryInterface extends GetQueryInterface {
  id?: string;
}
