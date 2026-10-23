import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { PingResponse } from '../models/ping-response';

@Service()
export class DemoApi {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiUrl}/demo`;

  ping(): Observable<PingResponse> {
    return this.http.get<PingResponse>(`${this.baseUrl}/ping`);
  }

  echo(message: string): Observable<PingResponse> {
    return this.http.post<PingResponse>(`${this.baseUrl}/echo`, { message });
  }
}
