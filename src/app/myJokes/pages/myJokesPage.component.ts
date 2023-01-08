import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';
import { AddJokeDialogComponent } from 'src/app/shared/addJoke/addJokeDialog.component';
import { ToasterService } from 'src/app/shared/toaster/toaster.service';

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

export class MyJokesPageComponent implements OnInit {
    public jokes: Joke[] = []
    constructor(private jokesService: JokesBaseService, private dialog: MatDialog, private toasterService: ToasterService) { }

    ngOnInit() { 
        this.jokesService.getJokes().subscribe( result => {
            this.jokes = result;
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddJokeDialogComponent,{data: {
            categoryId: '',
            content: ''
        }});
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const addingResult = this.jokesService.addJoke(result.categoryId,result.content);
                if(addingResult) {
                    this.toasterService.showToaster('Żart został pomyślnie dodany','Sukces','toaster--ok');
                    this.jokesService.getJokes().subscribe( result => {
                        this.jokes = result
                    });
                } else {
                    this.toasterService.showToaster('Nie udało się dodać nowego żartu','Niepowodzenie','toaster--warn');
                }
            }
        });
    }

    onJokeDelete(id: string) {
        this.jokes = this.jokes.filter(joke =>  joke.id !== id);
    }
}