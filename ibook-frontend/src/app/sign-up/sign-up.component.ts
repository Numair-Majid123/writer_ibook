import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { signup } from '../store/actions/auth.actions';
import { selectAuthLoading, selectAuthError } from '../store/selectors/auth.selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  loading$: any;
  error$: any;

  constructor(private store: Store) {
    this.loading$ = this.store.select(selectAuthLoading);
    this.error$ = this.store.select(selectAuthError);
  }

  onSubmit() {
    this.store.dispatch(signup({ username: this.username, email: this.email, password: this.password }));
  }
}