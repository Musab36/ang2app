import {Component} from 'angular2/core';

@Component({
    selector: 'test',
    templateUrl: `templates/test.html`,
    template: `
    <h1><span [style.color]="inputCat.value === 'yes' ? 'red' : ''">I love cats!</span></h1>
    <img src="mycat.jfif" alt=""  title="Cute Cat">
    <p><span [class.mycat]="inputCat.value === 'yes'">Cats are so cute and adorable!</span></p>
    <br>
    <label>Do you love cats?</label>
    <input type="text" #inputCat (keyup)="0">
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class TestComponent {

}