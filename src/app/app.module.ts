import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que este archivo existe
import { AppComponent } from './app.component'; // NO lo declares en NgModule
import { DashboardComponent } from './components/dashboard/dashboard.component'; // NO lo declares en NgModule
import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: []
})
export class AppModule {}
