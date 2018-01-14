import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { Router } from '@angular/router';

@Component({
//   selector: '{{contentArea}}',
  templateUrl: './contentArea.html',
  styleUrls: ['../app.component.less']
})
export class ContentAreaComponent{

  contentArea
  ngOnInit(): void {
  }

  constructor() {

  }
}
