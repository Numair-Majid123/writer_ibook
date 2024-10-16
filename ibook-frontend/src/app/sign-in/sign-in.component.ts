import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { login } from '../store/actions/auth.actions';
import { selectAuthLoading, selectAuthError } from '../store/selectors/auth.selectors';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  loading$: any;
  error$: any;

  constructor(private store: Store) {
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  onSubmit() {
    this.store.dispatch(login({ username: this.username, password: this.password }));
  }
}
