import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { ReservationModule } from './reservation/reservation.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, ReservationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
