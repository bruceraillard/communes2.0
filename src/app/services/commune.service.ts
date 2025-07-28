import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Commune} from '../models/commune';

@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  constructor(private http: HttpClient) {
  }

  getCommunes(): Observable<{ [province: string]: Commune[] }> {
    return this.http.get<{ [province: string]: Commune[] }>('/assets/data/communes.json');
  }
}
