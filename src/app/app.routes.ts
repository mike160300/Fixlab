import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';

//Componentes:
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DiscoverComponent } from './components/discover/discover.component';
import { NotifyComponent } from './components/notify/notify.component';
import { AnswersComponent } from './components/answers/answers.component';

const ROUTES: Routes = [
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
      children: [
        {path: 'home', component: HomeComponent},
        { path: 'profile', component: ProfileComponent },
        { path: 'discover', component: DiscoverComponent },
        { path: 'notify', component: NotifyComponent },
        { path: 'answers', component: AnswersComponent }
      ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'dashboard/home' }
];

export const APP_ROUTING= RouterModule.forRoot(ROUTES);
