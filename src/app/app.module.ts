import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { TaskProviderComponent } from './components/task-provider/task-provider.component';
import { LoginComponent } from './components/login/login.component';
import { GettingStartedComponent } from './components/getting-started/getting-started.component';
import { RegisterComponent } from './components/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { LeftGlobalNavigationComponent } from './components/left-global-navigation/left-global-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TaskProviderComponent,
    LoginComponent,
    GettingStartedComponent,
    RegisterComponent,
    NavBarComponent,
    LeftGlobalNavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
