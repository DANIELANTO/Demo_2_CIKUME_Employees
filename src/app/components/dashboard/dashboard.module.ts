import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';



@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    EmpleadosComponent,
    NavbarComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
