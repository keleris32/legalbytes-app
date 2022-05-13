export interface User {
  id?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  is_active?: string;
  user_role?: string;
  activation_code?: string;
  created_at?: string;
  updated_at?: string;
  last_login?: string | null;
}
