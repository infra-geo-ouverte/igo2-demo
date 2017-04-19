import { TestBed, async } from '@angular/core/testing';

import { IgoModule, provideDefaultSearchSources } from 'igo2';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        IgoModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [...provideDefaultSearchSources()]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have a search bar`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('igo-search-bar')).toBeTruthy();
  }));
});
