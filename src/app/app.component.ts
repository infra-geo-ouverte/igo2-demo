import { Component } from '@angular/core';
import { LanguageService } from 'igo2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(
    public language: LanguageService
  ) {}


}
