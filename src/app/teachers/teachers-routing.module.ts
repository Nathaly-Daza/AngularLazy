import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginTeachersComponent } from './containes/login-teachers/login-teachers.component';
import { ListTeachersComponent } from './containes/list-teachers/list-teachers.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'login', component:LoginTeachersComponent
      },
      {
        path:'register-teachers', component:ListTeachersComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
