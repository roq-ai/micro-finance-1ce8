const mapping: Record<string, string> = {
  'daily-trackers': 'daily_tracker',
  'loan-closures': 'loan_closure',
  'loan-details': 'loan_details',
  'part-payments': 'part_payment',
  'repayment-schedules': 'repayment_schedule',
  teams: 'team',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
