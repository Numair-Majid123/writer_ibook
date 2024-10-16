export interface Book {
  id: number;
  title: string;
  description: string;
  content: string;
  author?: string;
  created_at?: Date;
  updated_at?: Date;
}
