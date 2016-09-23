import { TestBed } from '@angular/core/testing';
import { provideRoutes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './about.component';
describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AboutComponent],
      providers: [provideRoutes([])],
    });
  });
  it('should work', () => {
    let fixture = TestBed.createComponent(AboutComponent);
    expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AboutComponent');
  });
});
