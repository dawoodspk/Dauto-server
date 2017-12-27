import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

//import { DatepickerModule } from 'ngx-date-picker';
import { NgDatepickerModule } from 'ng2-datepicker';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { ServicesSliderComponent } from './components/services-slider/services-slider.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';

import {UserService} from './user.service'
import { ImageService } from './image.service'
import { HttpService } from './http.service'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminBuycarComponent } from './admin-buycar/admin-buycar.component';
import { HttpModule } from '@angular/http';
import { AdminRentcarComponent } from './admin-rentcar/admin-rentcar.component';
import { AdminUserentryComponent } from './admin-userentry/admin-userentry.component';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router'
import { AuthguardGuard } from './authguard.guard';
import {UserSignup} from './user-signup';
import { BuyCarFormComponent } from './components/buy-car-form/buy-car-form.component';
import { ResSubmitComponent } from './components/res-submit/res-submit.component';
import { AdminSellcarComponent } from './admin-sellcar/admin-sellcar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ImgSliderComponent,
    ServicesSliderComponent,
    LoginFormComponent,
    SignUpFormComponent,
    SellCarComponent,
    BuyCarComponent,
    RentCarComponent,
    AdminDashboardComponent,
    AdminBuycarComponent,
    AdminRentcarComponent,
    AdminUserentryComponent,
    BuyCarFormComponent,
    ResSubmitComponent,
    AdminSellcarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CarouselModule,
    NgbModule,
    AppRoutingModule,
    NgDatepickerModule,
    HttpModule,
    RouterModule
  ],
  providers: [
    ImageService,
    HttpService,
    UserService,
    AuthguardGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
