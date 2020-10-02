import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { TextsampleComponent } from './textsample/textsample.component';
import { TextareasampleComponent } from './textareasample/textareasample.component';
import {CalendarModule} from 'primeng/calendar';
import { CalendersamplComponent } from './calendersampl/calendersampl.component';
@NgModule({
  declarations: [
    AppComponent,
    TextsampleComponent,
    TextareasampleComponent,
    CalendersamplComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
    TabViewModule,
    InputTextareaModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{ 
  
}
