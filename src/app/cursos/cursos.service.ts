import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly baseUrl = 'http://localhost:3000/cursos';

  constructor(private http: HttpClient) { }

  public list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl)
      .pipe(
        tap(console.log)
      );
  }
}
