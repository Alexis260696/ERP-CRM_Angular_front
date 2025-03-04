import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import path from 'path';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent}
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
