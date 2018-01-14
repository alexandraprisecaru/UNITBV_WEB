import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';

import { HeaderComponent} from './header/app.headerComponent';
import { NavComponent} from './nav/app.navComponent';
import { ContentAreaComponent} from './contentArea/app.contentAreaComponent';
import { FooterComponent } from './footer/app.footerComponent';
import { AboutComponent } from './about/app.aboutComponent';
import { LogInComponent } from './logIn/app.logInComponent';
import { RegisterComponent } from './register/app.registerComponent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent{
  ngOnInit(): void {
  }

  constructor() {

  }
}
