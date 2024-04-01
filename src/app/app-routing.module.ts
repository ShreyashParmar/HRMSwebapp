import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './employee/dashboard/dashboard.component';
import { HeaderComponent } from './employee/header/header.component';
import { SidebarComponent } from './employee/sidebar/sidebar.component';
import { LoginComponent } from './employee/login/login.component';
import { RegisterComponent } from './employee/register/register.component';
import { EmployeeSidebarComponent } from './employee-sidebar/employee-sidebar.component';


const routes: Routes = [
   {path: '', redirectTo: '/emplogin', pathMatch: 'full'},
  //  {
  //   path: 'items',
  //   loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule)
  // },
  {path: 'empdashboard', component: DashboardComponent},
  {path: 'empheader', component: HeaderComponent},
  {path: 'empsidebar', component: EmployeeSidebarComponent},
  {path: 'emplogin', component:LoginComponent},
  {path: 'empregister', component:RegisterComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
