import{ Component } from '@angular/core';
import{ AnimalsService } from '../service/animals.service';

@Component({
    selector: 'animals',
    template: `
        <h2>{{ title }}</h2>
        <ul>
            <li *ngFor="let animal of animals">
                {{animal}}
            </li>
        </ul>
    `
})
export class AnimalsComponent{
    title = "List of animals";
    animals;
    constructor(service: AnimalsService){
        this.animals = service.getCourses();
    }
}