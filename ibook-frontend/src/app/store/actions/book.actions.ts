import { createAction, props } from '@ngrx/store';
import { Book } from '../../models/book.model';

export const loadBooks = createAction('[Book] Load Books');
export const loadBooksSuccess = createAction('[Book] Load Books Success', props<{ books: Book[] }>());
export const loadBooksFailure = createAction('[Book] Load Books Failure', props<{ error: any }>());

export const createBook = createAction('[Book] Create Book', props<{ book: Book }>());
export const createBookSuccess = createAction('[Book] Create Book Success', props<{ book: Book }>());
export const createBookFailure = createAction('[Book] Create Book Failure', props<{ error: any }>());

export const updateBook = createAction('[Book] Update Book', props<{ book: Book }>());
export const updateBookSuccess = createAction('[Book] Update Book Success', props<{ book: Book }>());
export const updateBookFailure = createAction('[Book] Update Book Failure', props<{ error: any }>());

export const deleteBook = createAction('[Book] Delete Book', props<{ bookId: number }>());
export const deleteBookSuccess = createAction('[Book] Delete Book Success', props<{ bookId: number }>());
export const deleteBookFailure = createAction('[Book] Delete Book Failure', props<{ error: any }>());
