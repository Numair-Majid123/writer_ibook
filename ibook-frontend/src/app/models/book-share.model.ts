import { Book } from './book.model';

export interface BookShare {
  id: number;
  book: Book;
  shared_at: Date;
  name: string;
  email: string;
  address: string;
  city: string;
  created_at: Date;
  updated_at: Date;
}
