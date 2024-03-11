import { RouterModule, Routes } from '@angular/router';
// app-routing.module.ts
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  // other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}