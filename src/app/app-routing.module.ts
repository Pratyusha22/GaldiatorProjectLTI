import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminforgotpasswordComponent } from './adminforgotpassword/adminforgotpassword.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchbusComponent } from './searchbus/searchbus.component';
import { SeatComponent } from './seat/seat.component';
import { SignUpComponent } from './signup/signup.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'Admin Login',component:AdminloginComponent},
  {path:'Admin Login/AdminForgotPassword',component:AdminforgotpasswordComponent},
  {path:'Admin Login/AdminForgotPassword/Admin Login',component:AdminloginComponent},
  {path:'Admin Login/admindashboard',component:AdmindashboardComponent},
  
  {path:'About Us',component:AboutComponent},
  {path:'Terms Of Use',component:TermsOfUseComponent},
  {path:'Contact Us',component:ContactUsComponent},
  {path:'Login',component:LoginComponent},
  {path:'Login/ForgotPassword',component:ForgotpasswordComponent},
  {path:'Login/userdashboard',component:UserdashboardComponent},
  {path:'Login/ForgotPassword/Login',component:LoginComponent},
  {path:'Login/Sign-Up',component:SignUpComponent},
  {path:'Sign-Up',component:SignUpComponent},
  {path:'Sign-Up/userdashboard',component:UserdashboardComponent},
  {path:'Sign-Up/Login',component:LoginComponent},
  {path:'Login/Sign-Up/Login',component:LoginComponent},
  {path:'Home/Searchbus',component:SearchbusComponent},
  {path:'Home/Searchbus/Seat',component:SeatComponent},
  {path:'Home/Searchbus/Seat/Payment',component:PaymentComponent},
  {path:'Home/Searchbus/Seat/Payment/userdashboard',component:UserdashboardComponent},
  {path:'Login/userdashboard/Changepassword',component:ChangePasswordComponent},
  {path:'Login/userdashboard/Changepassword/userdashboard',component:UserdashboardComponent},
  {path:'Login/userdashboard/Home',component:HomeComponent},
  {path:'Login/userdashboard/Wallet',component:WalletComponent},
  {path:'Login/userdashboard/Wallet/userdashboard',component:UserdashboardComponent},
  {path:'Login/userdashboard/Home/Searchbus',component:SearchbusComponent},
  {path:'Login/userdashboard/Home/Searchbus/Seat',component:SeatComponent},
  {path:'Login/userdashboard/Home/Searchbus/Seat/Payment',component:PaymentComponent},
  {path:'Login/userdashboard/Home/Searchbus/Seat/Payment/userdashboard',component:UserdashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
