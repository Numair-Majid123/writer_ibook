import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookShare } from '../models/book-share.model';

@Injectable({
  providedIn: 'root'
})
export class BookShareService {
  private apiUrl = 'http://localhost:8000/api/book-shares';

  constructor(private http: HttpClient) { }

  getBookShares(): Observable<BookShare[]> {
    return this.http.get<BookShare[]>(this.apiUrl);
  }

  getBookShare(id: number): Observable<BookShare> {
    return this.http.get<BookShare>(`${this.apiUrl}/${id}`);
  }

  createBookShare(bookShare: BookShare): Observable<BookShare> {
    return this.http.post<BookShare>(this.apiUrl, bookShare);
  }

  updateBookShare(bookShare: BookShare): Observable<BookShare> {
    return this.http.put<BookShare>(`${this.apiUrl}/${bookShare.id}`, bookShare);
  }

  deleteBookShare(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
