import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  templateUrl: './about.html',
})
export class AboutComponent{
  message;
  ngOnInit(): void {
  }

  constructor() {

  }
}
