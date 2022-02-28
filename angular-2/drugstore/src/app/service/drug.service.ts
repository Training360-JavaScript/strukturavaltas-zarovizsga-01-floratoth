import { Drug } from 'src/app/model/drug';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugService {

  apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  getAll(): Observable<Drug[]> {
    return this.http.get<Drug[]>(`${this.apiUrl}`);
  }
}
