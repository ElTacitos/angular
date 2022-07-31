import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionComponent } from './action.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';

// eslint-disable-next-line init-declarations
let component: ActionComponent;
// eslint-disable-next-line init-declarations
let fixture: ComponentFixture<ActionComponent>;

async function configureTestingModule(): Promise<void> {
  await TestBed.configureTestingModule({
    declarations: [ActionComponent],
    imports: [HttpClientModule, ButtonModule],
  }).compileComponents();

  fixture = TestBed.createComponent(ActionComponent);
  component = fixture.componentInstance;
  fixture.detectChanges();
}

function isCreated(): void {
  expect(component).toBeTruthy();
}

describe('ActionComponent', () => {
  beforeEach(configureTestingModule);

  it('should create', isCreated);
});
