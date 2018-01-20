export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  plan: Plan | null;
  updated_at: string;
  created_at: string;
  notification_count: number;
  grace_period: boolean;
  meta: any;
}

export enum Plan {
  PRO_MONTHLY = 'vaetas_pro_monthly',
  PRO_ANNUALLY = 'vaetas_pro_annually'
}
