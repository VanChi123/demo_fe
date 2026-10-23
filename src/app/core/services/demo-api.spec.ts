import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DemoApi } from './demo-api';

describe('DemoApi', () => {
  let service: DemoApi;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(DemoApi);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTesting.verify());

  it('should GET /api/demo/ping', () => {
    service.ping().subscribe((res) => expect(res.message).toBe('pong'));

    const req = httpTesting.expectOne('/api/demo/ping');
    expect(req.request.method).toBe('GET');
    req.flush({ status: 'UP', message: 'pong', serverTime: '2026-10-23T10:00:00' });
  });

  it('should POST message to /api/demo/echo', () => {
    service.echo('hello').subscribe();

    const req = httpTesting.expectOne('/api/demo/echo');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({ message: 'hello' });
    req.flush({ status: 'UP', message: 'BE đã nhận: hello', serverTime: '2026-10-23T10:00:00' });
  });
});
