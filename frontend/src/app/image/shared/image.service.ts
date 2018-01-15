import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES =[
    {"id":1, "category": "dog", "caption": "Hello", "url":"assets/img/1.png"},
    {"id":2, "category": "dog", "caption": "Hello", "url":"assets/img/2.jpg"},
    {"id":3, "category": "dog", "caption":"Hello", "url":"assets/img/3.jpg"},
    {"id":4, "category": "dog", "caption": "Hello", "url":"assets/img/4.jpg"},
    {"id":5, "category": "dog", "caption": "Hello", "url":"assets/img/5.jpg"},
    {"id":6, "category": "cat", "caption": "Hello", "url":"assets/img/6.jpg"},
    {"id":7, "category": "cat", "caption": "Hello", "url":"assets/img/7.jpg"},
    {"id":8, "category": "cat", "caption": "Hello", "url":"assets/img/8.jpg"},
    {"id":9, "category": "cat", "caption": "Hello", "url":"assets/img/9.jpg"},
    {"id":10, "category": "cat", "caption": "Hello", "url":"assets/img/10.jpg"},
    {"id":11, "category": "cat", "caption": "Hello", "url":"assets/img/11.jpg"},
    {"id":12, "category": "cat", "caption":"Hello", "url":"assets/img/7.jpg"},
]
