import { Component, OnInit } from '@angular/core';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';

@Component({
    selector: 'joke-page',
    template: `
        <div class='page'>
            <div class='page__top'>
                <button mat-flat-button color="primary">Dodaj</button>
            </div>
            <joke-card [joke]='joke'></joke-card>
            <div class='page__bottom' (click)="getNextJoke()">
                <button mat-flat-button color="primary">Pokaż następny</button>
            </div>
        </div>
    `,
    styleUrls: ['../../shared/shared.scss']
})

export class JokePageComponent implements OnInit {
    public joke: Joke | undefined = undefined;
    constructor(private jokesService: JokesBaseService) { }

    ngOnInit() {
        this.getNextJoke();
    }

    getNextJoke() {
        this.joke = this.jokesService.getRandomJoke();
    }
}