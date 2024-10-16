import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store';

import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { loadBooks } from '../store/actions/book.actions';
import { selectAllBooks, selectBooksLoading } from '../store/selectors/book.selectors';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  
  constructor(private store: Store<AppState>) {
    this.books$ = this.store.select(selectAllBooks);
    this.loading$ = this.store.select(selectBooksLoading);
  }

  ngOnInit() {
    this.store.dispatch(loadBooks());
  }
}
