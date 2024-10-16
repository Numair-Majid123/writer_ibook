import { ActionReducerMap } from '@ngrx/store';
import * as fromBook from './reducers/book.reducer';
import * as fromAuth from './reducers/auth.reducer';
import { BookEffects } from './effects/book.effects';
import { AuthEffects } from './effects/auth.effects';


export interface AppState {
  books: fromBook.BookState;
  auth: fromAuth.AuthState;
}

export const reducers: ActionReducerMap<AppState> = {
  books: fromBook.bookReducer,
  auth: fromAuth.authReducer
};

export const effects = [
  BookEffects,
  AuthEffects
];
