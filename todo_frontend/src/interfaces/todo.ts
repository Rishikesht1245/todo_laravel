export interface ITodo {
  id: number;
  todo: string;
  user_id?: number;
  is_finished: boolean;
  created_at: Date;
  updated_at: Date;
}
