import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class WebapiService {
  constructor(private http: HttpClient) {}

  setTitle(): string {
    return 'Feed Data From Service';
  }

  feedData(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
