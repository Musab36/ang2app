import {Component} from 'angular2/core';

@Component({
    selector: 'message',
    template: `
    <div class="container">
    <div [class.angrycat]="inputCat.value === 'no'">
    <h1><span [style.color]="inputCat.value === 'yes' ? 'red' : ''">I love cats!</span></h1>
    <img src="mycat.jfif" alt=""  title="Cute Cat">
    <img src="caty.jfif" alt="">
    <img src="ancat.jfif" alt="">
    <p><span [class.mycat]="inputCat.value === 'yes'">Cats are so cute and adorable!</span></p>
    <br>
    <label>Do you love cats?</label>
    <input type="text" #inputCat (keyup)="0">
    </div>
    <br>
    <h1>Angular 2 is really complicated!</h1>
    <h2>To understand Angular2, you'll need very clear and straight forward tutorials!</h2>
    <p>The biggest problem I'm having now is the Moringa Angular2 content!</p>
    <p>The content is poorly written!</p>
    <p>It looks like some drunken guys wrote it!</p>
    </div>
    `,
    styleUrls: ['src/css/mycomponent.css']
})

export class MessageComponent {

}