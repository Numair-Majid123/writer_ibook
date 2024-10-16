import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as BookActions from '../actions/book.actions';
import { BookService } from '../../services/book.service';

@Injectable()
export class BookEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.loadBooks),
      mergeMap(() =>
        this.bookService.getBooks().pipe(
          map(books => BookActions.loadBooksSuccess({ books })),
          catchError(error => of(BookActions.loadBooksFailure({ error })))
        )
      )
    )
  );

  createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.createBook),
      mergeMap(({ book }) =>
        this.bookService.createBook(book).pipe(
          map(createdBook => BookActions.createBookSuccess({ book: createdBook })),
          catchError(error => of(BookActions.createBookFailure({ error })))
        )
      )
    )
  );

  updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.updateBook),
      mergeMap(({ book }) =>
        this.bookService.updateBook(book).pipe(
          map(updatedBook => BookActions.updateBookSuccess({ book: updatedBook })),
          catchError(error => of(BookActions.updateBookFailure({ error })))
        )
      )
    )
  );

  deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookActions.deleteBook),
      mergeMap(({ bookId }) =>
        this.bookService.deleteBook(bookId).pipe(
          map(() => BookActions.deleteBookSuccess({ bookId })),
          catchError(error => of(BookActions.deleteBookFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bookService: BookService
  ) {}
}
