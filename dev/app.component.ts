import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component"; // Importing the new component

@Component({ // Our decorator
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Hello World!</p>
        <h2>Now comes the second component</h2>
        <my-component></my-component> 
    `,
    directives: [MyComponentComponent] // A directive importing the newly created component after binding its html tag
})
export class AppComponent {

}