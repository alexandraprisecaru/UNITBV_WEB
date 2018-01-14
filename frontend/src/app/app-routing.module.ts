
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { LogInComponent } from './logIn/app.logInComponent';
import { RegisterComponent } from './register/app.registerComponent';
const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', component: ContentAreaComponent
  }, 
  {
    path: 'login', component: LogInComponent
  }, 
  {
    path: 'register', component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
