import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface QuizInterface {
  id?: string;
  name: string;
  description?: string;
  teacher_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface QuizGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  teacher_id?: string;
}
