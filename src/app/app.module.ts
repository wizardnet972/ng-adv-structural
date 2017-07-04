import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { BDropDownComponent } from './b-dropdown.component';
import { BSelectMatchDirective } from './b-select-match.directive';
import { BSelectOptionDirective } from './b-select-option.directive';

@NgModule({
  declarations: [
    AppComponent,
    BDropDownComponent,
    BSelectMatchDirective,
    BSelectOptionDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
