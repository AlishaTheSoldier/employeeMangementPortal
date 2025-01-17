import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./employee-management/home/home.component";
import { EmployeeListComponent } from "./employee-management/employee-list/employee-list.component";
import { EmployeeMedicalComponent } from "./employee-management/employee-medical/employee-medical.component";
import { ChartComponent } from "./employee-management/chart/chart.component";

const routes: Routes=[
  {path:'', component:HomeComponent},
  {path:'list',component:EmployeeListComponent},
  {path:'medical',component:EmployeeMedicalComponent},
  {path:'chart',component:ChartComponent},
]

@NgModule({
  declarations:[AppComponent],
  imports:[RouterModule.forRoot(routes)],
bootstrap:[AppComponent]
})

export class AppRoutingModule{}