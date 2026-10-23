import { DatePipe } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { finalize, Observable } from 'rxjs';
import { PingResponse } from '../../core/models/ping-response';
import { DemoApi } from '../../core/services/demo-api';

@Component({
  imports: [FormsModule, DatePipe],
  selector: 'app-ping',
  styleUrl: './ping.scss',
  templateUrl: './ping.html',
})
export class Ping {
  private readonly demoApi = inject(DemoApi);

  protected readonly message = signal('Xin chào từ Angular');
  protected readonly loading = signal(false);
  protected readonly result = signal<PingResponse | null>(null);
  protected readonly error = signal<string | null>(null);

  protected ping(): void {
    this.call(this.demoApi.ping());
  }

  protected echo(): void {
    this.call(this.demoApi.echo(this.message()));
  }

  private call(request$: Observable<PingResponse>): void {
    this.loading.set(true);
    this.result.set(null);
    this.error.set(null);

    request$.pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (res) => this.result.set(res),
      error: (err: HttpErrorResponse) =>
        this.error.set(`Không kết nối được BE (HTTP ${err.status}): ${err.message}`),
    });
  }
}
