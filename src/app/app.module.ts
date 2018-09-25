import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { RoomsComponent } from './accommodations/rooms/rooms.component';
import { FoodAndBeveragesComponent } from './food-and-beverages/food-and-beverages.component';
import { RestaurantsComponent } from './food-and-beverages/restaurants/restaurants.component';
import { BarsComponent } from './food-and-beverages/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavTabsComponent } from './navigation/nav-tabs/nav-tabs.component';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationsComponent,
    RoomsComponent,
    FoodAndBeveragesComponent,
    RestaurantsComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    WesternWeddingsComponent,
    ThaiWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavTabsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
