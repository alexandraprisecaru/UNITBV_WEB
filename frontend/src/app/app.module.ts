// CORE
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// UI
import { SuiModule } from 'ng2-semantic-ui';
import { DataTableModule, SharedModule } from 'primeng/primeng';

// Services
import { ApiService } from './service';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components';

// used to create fake backend
import { fakeBackendProvider } from './service';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';
import { CalendarModule } from 'primeng/components/calendar/calendar';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ContextMenuModule } from 'primeng/components/contextmenu/contextmenu';
import { UserComponent } from './components/pages/user/user.component';
import { AnimalsComponent } from './components/animals.component';
import { AnimalsService } from './service/animals.service';
import { HeaderComponent } from './header/app.headerComponent';
import { NavComponent } from './nav/app.navComponent';
import { ContentAreaComponent } from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { LogInComponent } from './logIn/app.logInComponent';
import { RegisterComponent } from './register/app.registerComponent';
import { UserService } from './service/user.service';
import { AuthGuard } from './auth-guard.guard';
import { ImageComponent } from './image/image.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { ImageService } from './image/shared/image.service';
import { CarouselModule } from 'angular4-carousel/src/app';
import { ContactComponent } from './contact/app.contactComponent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    AnimalsComponent,
    HeaderComponent,
    NavComponent,
    ContentAreaComponent, 
    FooterComponent, 
    AboutComponent,
    LogInComponent,
    RegisterComponent, 
    ImageComponent, 
    GalleryComponent, 
    ImageDetailComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SuiModule,
    // Prime
    DataTableModule,
    SharedModule,
    FormsModule,
    DataTableModule,
    CalendarModule,
    ButtonModule,
    InputTextModule,
    ContextMenuModule,
    CarouselModule
  ],
  providers: [
    AppRoutingModule,
    ApiService,
    AnimalsService, 
    UserService, 
    ImageService,
    AuthGuard
    // providers used to create fake backend
    // fakeBackendProvider,
    // MockBackend,
    // BaseRequestOptions
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
