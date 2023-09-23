import { GetQueryInterface } from 'interfaces';

export interface LoanDetailsInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LoanDetailsGetQueryInterface extends GetQueryInterface {
  id?: string;
}
