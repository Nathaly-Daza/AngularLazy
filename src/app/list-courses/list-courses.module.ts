import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCoursesRoutingModule } from './list-courses-routing.module';
import { ListComponent } from './containes/list/list.component';
import { RegisterCoursesComponent } from './containes/register-courses/register-courses.component';


@NgModule({
  declarations: [
    ListComponent,
    RegisterCoursesComponent
  ],
  imports: [
    CommonModule,
    ListCoursesRoutingModule
  ]
})
export class ListCoursesModule { }
