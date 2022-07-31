import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

async function configureTestingModule(): Promise<void> {
  await TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterTestingModule, HttpClientModule],
    schemas: [NO_ERRORS_SCHEMA],
  }).compileComponents();
}

function createApp(): void {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app).toBeTruthy();
}

function checkTitle(): void {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  expect(app.title).toEqual('Appli Blanche');
}

describe('AppComponent', () => {
  beforeEach(configureTestingModule);

  it('should create the app', createApp);

  it(`should have as title 'Appli Blanche'`, checkTitle);
});
