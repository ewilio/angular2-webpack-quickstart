import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [RouterTestingModule], declarations: [HomeComponent], providers: [provideRoutes([])] });
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
  });
});
