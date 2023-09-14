import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import { ForgetingComponent } from './auth/forgeting/forgeting.component';
import { DashboardComponent } from './dash/dashboard/dashboard.component';
import { DriverComponent } from './dash/driver/driver.component';
import { RiderComponent } from './dash/rider/rider.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './dash/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { SidenavComponent } from './dash/sidenav/sidenav.component';
import  {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgApexchartsModule} from 'ng-apexcharts';
import { AddDriverComponent } from './dash/add-driver/add-driver.component';
import { DOrderComponent } from './dash/d-order/d-order.component';
import { VerfyComponent } from './dash/verfy/verfy.component';
import { AllOrdersComponent } from './dash/all-orders/all-orders.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddRiderComponent } from './dash/add-rider/add-rider.component';
import { ChangepasswordComponent } from './dash/changepassword/changepassword.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetingComponent,
    DashboardComponent,
    DriverComponent,
    RiderComponent,
    HomeComponent,
    SidenavComponent,
    AddDriverComponent,
    DOrderComponent,
    VerfyComponent,
    AllOrdersComponent,
    AddRiderComponent,
    ChangepasswordComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatToolbarModule,MatSnackBarModule,MatSidenavModule,MatIconModule,
    AppRoutingModule,ReactiveFormsModule,MatInputModule,MatFormFieldModule,MatMenuModule,MatListModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,MatDialogModule,NgxPaginationModule,
    MatTabsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), NgApexchartsModule,
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFunctions(() => getFunctions()),
    provideMessaging(() => getMessaging()),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
