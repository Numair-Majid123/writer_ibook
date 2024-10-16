import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordLookupService {
  private apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

  constructor(private http: HttpClient) { }

  getWordInfo(word: string): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}${word}`).pipe(
      map((response: any[]) => {
        if (response && response.length > 0) {
          const entry = response[0];
          const meaning = entry.meanings[0];
          return {
            definition: meaning.definitions[0].definition,
            partOfSpeech: meaning.partOfSpeech,
            example: meaning.definitions[0].example
          };
        }
        return null;
      })
    );
  }}
