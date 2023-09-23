interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Loan Officer', 'Accountant', 'Administrator', 'Customer'],
  tenantName: 'Team',
  applicationName: 'Micro Finance',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage daily tracker data',
    'Manage part payment data',
    'Manage loan closure data',
    'Manage repayment schedule data',
    'Manage loan details data',
    'Manage user data',
    'Manage team data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/6efdaf9a-d2d9-4571-be5a-4671accb9661',
};
