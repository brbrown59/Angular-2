import {Component} from 'angular2/core';
export class Hero {
	id: number
	name: string
};

@Component({
	selector: 'my-app',
	templateUrl: 'template.html'
})
export class AppComponent {
	title = "Heroes";
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}
};