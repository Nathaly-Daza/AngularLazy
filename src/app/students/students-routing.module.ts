import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginStudentsComponent } from './containes/login-students/login-students.component';
import { RegisterStudentsComponent } from './containes/register-students/register-students.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {path:'login', component:LoginStudentsComponent},
      {path:'register-students', component:RegisterStudentsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
