import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';
import { AddJokeDialogService } from 'src/app/shared/addJoke/addJokeDialog.service';

@Component({
    selector: 'my-jokes-page',
    template: `
        <div class='page'>
            <div class='page__top'>
                <button mat-flat-button color='primary' (click)='openDialog()'>Dodaj</button>
            </div>
            <div class='page__jokes-list'>
                <my-joke-card *ngFor='let joke of jokes' [joke]='joke' (jokeDeleted)='onJokeDelete($event)'></my-joke-card>
            </div>
        </div>
    `,
    styleUrls: ['../../shared/shared.scss']
})

export class MyJokesPageComponent implements OnInit, OnDestroy {
    public jokes: Joke[] = [];
    private subs: Subscription = new Subscription();

    constructor(private jokesService: JokesBaseService, private addJokeDialogService: AddJokeDialogService) { }
    
    ngOnInit() { 
        this.jokesService.getJokes().subscribe( result => {
            this.jokes = result;
        });
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    openDialog(): void {
        this.subs.add(this.addJokeDialogService.hasBeenAddedSubject$.subscribe(_ => {
            this.jokesService.getJokes().subscribe( jokes => {
                this.jokes = jokes;
            })
        }));
        this.addJokeDialogService.openDialog({
            categoryId: '',
            content: ''
        });
    }

    onJokeDelete(id: string) {
        this.jokes = this.jokes.filter(joke =>  joke.id !== id);
    }
}