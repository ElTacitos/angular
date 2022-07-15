import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";
import { TestBed } from "@angular/core/testing";

async function configureTestingModule(): Promise<void> {
  await TestBed.configureTestingModule({
    declarations: [AppComponent],
    imports: [RouterTestingModule],
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
  expect(app.title).toEqual("frontend");
}

function renderTitle(): void {
  const fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  const compiled = fixture.nativeElement as HTMLElement;
  expect(compiled.querySelector(".content span")?.textContent).toContain(
    "frontend app is running!"
  );
}

describe("AppComponent", () => {
  beforeEach(configureTestingModule);

  it("should create the app", createApp);

  it(`should have as title 'frontend'`, checkTitle);

  it("should render title", renderTitle);
});
