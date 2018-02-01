import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { FoobarComponent } from './foobar/foobar.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    FoobarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
