import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { ListemployeesComponent } from './employees/listemployees.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/listemployees', pathMatch: 'full' },
  { path: 'create-employee', component: CreateEmployeeComponent },
  { path: 'listemployees', component: ListemployeesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
