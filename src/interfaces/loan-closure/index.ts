import { GetQueryInterface } from 'interfaces';

export interface LoanClosureInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface LoanClosureGetQueryInterface extends GetQueryInterface {
  id?: string;
}
