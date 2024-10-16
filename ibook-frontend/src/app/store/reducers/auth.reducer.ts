import { createReducer, on } from '@ngrx/store';
import * as AuthActions from '../actions/auth.actions';
import { User } from '../../models/user.model';

export interface AuthState {
  user: User | null;
  loading: boolean;
  error: any;
}

export const initialState: AuthState = {
  user: null,
  loading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.login, state => ({ ...state, loading: true })),
  on(AuthActions.loginSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(AuthActions.loginFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.signupSuccess, (state, { user }) => ({ ...state, user, loading: false })),
  on(AuthActions.signupFailure, (state, { error }) => ({ ...state, error, loading: false })),
  on(AuthActions.logoutSuccess, state => ({ ...state, user: null }))
);
