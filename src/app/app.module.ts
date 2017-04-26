import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { MaterialModule } from '@angular/material';

import { IgoModule, provideDefaultSearchSources,
         LanguageLoader, provideLanguageService } from 'igo2';

import { NavigatorModule } from './navigator/navigator.module';
import { AppComponent } from './app.component';

export function translateLoader(http: Http) {
  return new LanguageLoader(http, './assets/locale/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    IgoModule.forRoot(),
    NavigatorModule
  ],
  providers: [
    ...provideDefaultSearchSources(),
    provideLanguageService({
      loader: translateLoader
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
