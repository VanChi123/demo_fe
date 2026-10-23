import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ping } from './ping';

describe('Ping', () => {
  let component: Ping;
  let fixture: ComponentFixture<Ping>;
  let httpTesting: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ping],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(Ping);
    component = fixture.componentInstance;
    httpTesting = TestBed.inject(HttpTestingController);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show BE response after ping', async () => {
    const button = fixture.nativeElement.querySelector('button') as HTMLButtonElement;
    button.click();

    httpTesting
      .expectOne('/api/demo/ping')
      .flush({ status: 'UP', message: 'pong', serverTime: '2026-10-23T10:00:00' });
    await fixture.whenStable();

    expect((fixture.nativeElement as HTMLElement).textContent).toContain('pong');
  });
});
