import {CoursesComponent} from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LanguageComponent } from './language/language.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
