import { TestBed, async } from '@angular/core/testing';
import { Http } from '@angular/http';

import { IgoModule, provideDefaultSearchSources,
  LanguageLoader, provideLanguageService } from 'igo2';
import { NavigatorModule } from './navigator/navigator.module';
import { AppComponent } from './app.component';

export function translateLoader(http: Http) {
  return new LanguageLoader(http, './base/src/assets/locale/', '.json');
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        NavigatorModule,
        IgoModule.forRoot()
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        ...provideDefaultSearchSources(),
        provideLanguageService({
          loader: translateLoader
        })
      ]
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
