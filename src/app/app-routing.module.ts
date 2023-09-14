import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { HomeComponent } from './dash/home/home.component';
import { DriverComponent } from './dash/driver/driver.component';
import { RiderComponent } from './dash/rider/rider.component';
import { AddDriverComponent } from './dash/add-driver/add-driver.component';
import { DOrderComponent } from './dash/d-order/d-order.component';
import { AllOrdersComponent } from './dash/all-orders/all-orders.component';
import { AddRiderComponent } from './dash/add-rider/add-rider.component';
import { ChangepasswordComponent } from './dash/changepassword/changepassword.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  {path:'dash', component:DashboardComponent, children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'driver',component:DriverComponent},
    {path:'driver/d_oder',component:DOrderComponent},
    {path:'addriver',component:AddDriverComponent},
    {path:'orders',component:AllOrdersComponent},
    {path:'rider',component:RiderComponent},
    {path:'addrider',component:AddRiderComponent},
    {path:'pwdchange',component:ChangepasswordComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
