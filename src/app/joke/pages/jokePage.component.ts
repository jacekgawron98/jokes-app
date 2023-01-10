import { Component, OnInit } from '@angular/core';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';
import { AddJokeDialogService } from 'src/app/shared/addJoke/addJokeDialog.service';

@Component({
    selector: 'joke-page',
    template: `
        <div class='page'>
            <div class='page__top'>
                <button mat-flat-button color='primary' (click)='openDialog()'>Dodaj</button>
            </div>
            <joke-card [joke]='joke'></joke-card>
            <div class='page__bottom' (click)='getNextJoke()'>
                <button mat-flat-button color='primary'>Pokaż następny</button>
            </div>
        </div>
    `,
    styleUrls: ['../../shared/shared.scss']
})

export class JokePageComponent implements OnInit {
    public joke: Joke | undefined = undefined;
    
    constructor(private jokesService: JokesBaseService, private addJokeDialogService: AddJokeDialogService) { }

    ngOnInit() {
        this.getNextJoke();
    }

    getNextJoke() {
        this.jokesService.getRandomJoke().subscribe( result => {
            this.joke = result
        });
    }

    openDialog(): void {
        this.addJokeDialogService.openDialog({
            categoryId: '',
            content: ''
        });
    }
}