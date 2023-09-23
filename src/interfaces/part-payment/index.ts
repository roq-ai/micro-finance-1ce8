import { GetQueryInterface } from 'interfaces';

export interface PartPaymentInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface PartPaymentGetQueryInterface extends GetQueryInterface {
  id?: string;
}
