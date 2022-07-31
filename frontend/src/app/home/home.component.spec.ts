import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionComponent } from '../action/action.component';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';

// eslint-disable-next-line init-declarations
let component: HomeComponent;
// eslint-disable-next-line init-declarations
let fixture: ComponentFixture<HomeComponent>;

async function configureTestingModule(): Promise<void> {
  await TestBed.configureTestingModule({
    declarations: [HomeComponent, ActionComponent],
    imports: [HttpClientModule],
    schemas: [NO_ERRORS_SCHEMA],
  }).compileComponents();

  fixture = TestBed.createComponent(HomeComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
}

function isCreated(): void {
  expect(component).toBeTruthy();
}

describe('HomeComponent', () => {
  beforeEach(configureTestingModule);

  it('should create', isCreated);
});
