import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { RegisterStudentsComponent } from './containes/register-students/register-students.component';


@NgModule({
  declarations: [
    RegisterStudentsComponent,
    
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
