import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './containes/list/list.component';
import { RegisterCoursesComponent } from './containes/register-courses/register-courses.component';

const routes: Routes = [

  {
    path:'',
    children:[
      {
        path:'list-courses', component:ListComponent
      },
      {
        path:'register-courses', component:RegisterCoursesComponent
      },
      {
        path:'**', redirectTo:''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCoursesRoutingModule { }
