import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';
import { SellCarComponent } from './components/sell-car/sell-car.component';
import { BuyCarComponent } from './components/buy-car/buy-car.component';
import { RentCarComponent } from './components/rent-car/rent-car.component';
import { AppComponent } from './app.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { AdminBuycarComponent } from './admin-buycar/admin-buycar.component'
import { AuthguardGuard } from './authguard.guard';
import { AdminUserentryComponent } from './admin-userentry/admin-userentry.component';
import { AdminRentcarComponent } from './admin-rentcar/admin-rentcar.component';
import { BuyCarFormComponent } from './components/buy-car-form/buy-car-form.component';
import { ResSubmitComponent } from './components/res-submit/res-submit.component';
import { AdminSellcarComponent } from './admin-sellcar/admin-sellcar.component';

const routes: Routes = [
  {
    path: '',
    children: [
         {
           path: '',
           component: ImgSliderComponent
         },
         { 
           path: 'sell-car', 
           component: SellCarComponent 
         },
         {
           path: 'buy-a-car',
           component: BuyCarComponent
         }
     ]
   },
  
  { 
    path: 'dash',
    children:[
      {
        path : 'board',
        canActivate:[AuthguardGuard],
        component : AdminDashboardComponent 
      },
      {
        path : 'buycar',
        component : AdminBuycarComponent 
      },
      {
        path : 'rentcar',
        component : AdminRentcarComponent 
      },
      {
        path : 'userentry',
        component : AdminUserentryComponent 
      },
      {
        path : 'sellcarentry',
        component : AdminSellcarComponent 
      }
    ]    
  },

  { 
    path: 'signup',
    component:  SignUpFormComponent 
  },
  
  { 
    path: 'signin',
    component: LoginFormComponent
  },
 
  
  { 
    path: 'rent-car', 
    component: RentCarComponent 
  },
  { 
    path: 'buy-car-form', 
    component: BuyCarFormComponent 
  },

  {
    path : 'success',
    component : ResSubmitComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ],
  
  declarations: []
})
export class AppRoutingModule { }
