import {Component} from 'angular2/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from 'angular2/core';

@Component({
	selector: 'my-app',
	styleUrls: ['styles.css'],
	templateUrl: 'template.html',
	directives: [HeroDetailComponent],
	providers: [HeroService]
})


export class AppComponent implements OnInit {
	constructor(private _heroService: HeroService) { }
	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}
	heroes: Hero[];
	title = "Heroes";
	selectedHero: Hero;
	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}
	ngOnInit() {
		this.getHeroes();
	}
};
