import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/module';
import { NavigatorComponent } from './navigator.component';

@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NavigatorComponent
  ]
})
export class NavigatorModule { }
