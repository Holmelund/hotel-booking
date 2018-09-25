import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccommodationsComponent } from './accommodations/accommodations.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { FoodAndBeveragesComponent } from './food-and-beverages/food-and-beverages.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: 'accomodations', component: AccommodationsComponent },
    { path: 'celebrations', component: CelebrationsComponent },
    { path: 'food-and-beverages', component: FoodAndBeveragesComponent },
    { path: 'lifestyle', component: LifestyleComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'weddings', component: WeddingsComponent },
    { path: 'sign-in', component: SignInComponent },
    { path: 'sign-up', component: SignUpComponent },
    { path: '', component: HomeComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
          )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
