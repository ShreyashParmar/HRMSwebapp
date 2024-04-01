import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { EmployeeSidebarComponent } from '../employee-sidebar/employee-sidebar.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeSidebarComponent 
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DashboardComponent,
	  HeaderComponent,
    FooterComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent 
  ]
})
export class EmployeeModule { }
