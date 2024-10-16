import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BookState } from '../reducers/book.reducer';

export const selectBookState = createFeatureSelector<BookState>('books');

export const selectAllBooks = createSelector(
  selectBookState,
  (state: BookState) => state.books
);

export const selectBooksLoading = createSelector(
  selectBookState,
  (state: BookState) => state.loading
);

export const selectBooksError = createSelector(
  selectBookState,
  (state: BookState) => state.error
);
