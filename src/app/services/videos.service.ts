import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResponseApi } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor(private http: HttpClient) { }

  getVideoPages(pageIndex: number, pageSize: number): Observable<IResponseApi> {
    return this.http.get<IResponseApi>(`http://localhost:3000/videos?_page=${pageIndex}&_per_page=${pageSize}`)
  }
}
