import {Component, Input} from 'angular2/core';import { Component, Input, OnInit } from 'angular2/core';
import {Hero} from './hero';
import { RouteParams } from 'angular2/router';
import { HeroService } from './hero.service';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'hero-detail-template.html'
})
export class HeroDetailComponent implements OnInit {
	constructor(
			private _heroService: HeroService,
			private _routeParams: RouteParams) {
	}
	@Input()
	hero: Hero;
	ngOnInit() {
		let id = +this._routeParams.get('id');
		this._heroService.getHero(id)
				.then(hero => this.hero = hero);
	}
	goBack() {
		window.history.back();
	}

}