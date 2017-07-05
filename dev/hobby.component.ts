import {Component} from 'angular2/core';

@Component({
    selector: 'hobby',
    template: `
    <div class="container">
    <h1>My hobbies</h1>
    <h3>I got a lot of hobbies such as: </h3>
    <ul>
    <li>Travelling</li>
    <li>Doing business</li>
    <li>Driving</li>
    <li>Camping in the mountains</li>
    <li>Swimming in the beach</li>
    <li>Watching sci fi movies</li>
    <li>Playing games</li>
    <li>Reading</li>
    <li>Learning</li>
    <li>Hangging out with friends</li>
    <li>Coding</li>
    </ul>
    </div>
    `
})
export class HobbyComponent {

}