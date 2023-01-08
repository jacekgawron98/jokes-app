import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'joke-card',
    template: `
        <mat-card class='joke-card'>
            <mat-card-content *ngIf="joke; else spinner">
                <div class='joke-card__category'>
                    kategoria:&nbsp;<b>{{joke.category?.name}}</b>
                </div>
                <div class='joke-card__content'>{{joke.content}}</div>
            </mat-card-content>
            <ng-template #spinner>
                <mat-card-content>
                    <div class='joke-card__content'>
                        <mat-spinner [diameter]='35'></mat-spinner>
                    </div>
                </mat-card-content>
            </ng-template>
        </mat-card>
    `,
    styleUrls: ['./jokeCard.component.scss','../../shared/shared.scss']
})

export class JokeCardComponent implements OnInit {
    @Input() joke: Joke | undefined = undefined;

    constructor() { }

    ngOnInit() { }
}