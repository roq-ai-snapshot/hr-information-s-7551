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
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner', 'HR Manager', 'Payroll Administrator', 'Employee', 'Accountant'],
  tenantName: 'Company',
  applicationName: 'HR Information System',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read employee information',
    'Read user information',
    'View vacation details',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage employee records',
    'Manage payroll details',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f7b657d4-8448-4f0b-b6f6-6c5467437b14',
};
