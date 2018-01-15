import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent, UserComponent } from './components';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { LogInComponent } from './logIn/app.logInComponent';
import { RegisterComponent } from './register/app.registerComponent';
import { AuthGuard } from './auth-guard.guard';
import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/app.contactComponent';

const routes: Routes = [
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', component: ContentAreaComponent, pathMatch: 'full'
  }, 
  {
    path: 'login', component: LogInComponent
  }, 
  {
    path: 'register', component: RegisterComponent
  }, 
  {
    path: 'image', component: ImageComponent
  }, 
  {
    path: 'gallery', component: GalleryComponent
  }, 
  {
    path: 'contact', component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
