import { Routes } from '@angular/router';
import { Onboarding } from './components/onboarding/onboarding';
import { Auth } from './components/auth/auth';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';

export const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'onboarding', component: Onboarding },
  { path: 'auth', component: Auth },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile }
];