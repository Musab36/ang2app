import {Component} from 'angular2/core'; // We are importing our component

@Component({
    selector: 'my-component', // A new component html binding tag
    template: `
      Hi I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : ''">{{name}}</span> and this is my first angular2 component!
      <span [class.is-awesome]="inputElement.value === 'yes'">It is so awesome!</span>
      <br>
      <br>
      Is it awesome?
      <input type="text" #inputElement (keyup)="0">
      <br><br>
      <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered</button>
    `,
    styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent { // Exporting a new component class to be available outside this component
  name = 'Musab';
}