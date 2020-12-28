import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

import { Curso } from './curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly baseUrl = `${environment.baseUrl}/cursos`;

  constructor(private http: HttpClient) { }

  public list(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }
}
