import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { CarouselModule } from 'angular4-carousel';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

@Component({
  selector: 'header',
  templateUrl: './header.html',
  styleUrls: ['../app.component.less']
})
export class HeaderComponent{
  ngOnInit(): void {
  }

  constructor() {

  }

  public imageSources: string[] = [
    '../../assets/img/1.jpg',
    '../../assets/img/14.jpg',
    '../../assets/img/15.jpg'
 ];
 
  public config: ICarouselConfig = {
    verifyBeforeLoad: true,
    log: false,
    animation: true,
    animationType: AnimationConfig.SLIDE,
    autoplay: true,
    autoplayDelay: 3000,
    stopAutoplayMinWidth: 768
  };
}
