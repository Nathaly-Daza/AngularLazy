import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'courses', loadChildren:()=> import(
      './list-courses/list-courses.module'
    ).then((m)=>m.ListCoursesModule)
  },
  {
    path:'students', loadChildren:()=> import(
      './students/students.module'
    ).then((m)=>m.StudentsModule)
  },
  {
    path:'teachers', loadChildren:()=> import(
      './teachers/teachers.module'
    ).then((m)=>m.TeachersModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
