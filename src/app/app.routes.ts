import { Routes } from '@angular/router';
import { Onboarding } from './components/onboarding/onboarding';
import { Auth } from './components/auth/auth';
import { Home } from './components/home/home';
import { Profile } from './components/profile/profile';
import { Games } from './components/games/games';
import { Personajes } from './components/personajes/personajes';
import { MundosComponent } from './components/mundos/mundos'; // 👈 Esto busca tu archivo 'mundos.ts'

export const routes: Routes = [
  { path: '', redirectTo: 'onboarding', pathMatch: 'full' },
  { path: 'onboarding', component: Onboarding },
  { path: 'auth', component: Auth },
  { path: 'home', component: Home },
  { path: 'profile', component: Profile },
  { path: 'games', component: Games },
  { path: 'personajes', component: Personajes },
  { path: 'mundos', component: MundosComponent } // 👈 Esto activa tu pantalla de mundos
];