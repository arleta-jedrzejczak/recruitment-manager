import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarPageComponent } from './pages/calendar-page/calendar-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CalendarPageComponent],
  exports: [
    CalendarPageComponent
  ]
})
export class CalendarModule { }
