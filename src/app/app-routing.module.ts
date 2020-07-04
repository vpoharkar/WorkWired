import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent }  from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { TaskProviderComponent } from './components/task-provider/task-provider.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'getting-started',
    component: GettingStartedComponent
  },
  {
    path: 'task-form',
    component: TaskProviderComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
