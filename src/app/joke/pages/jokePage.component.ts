import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';
import { AddJokeDialogComponent } from 'src/app/shared/addJoke/addJokeDialog.component';
import { ToasterService } from 'src/app/shared/toaster/toaster.service';

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
    constructor(private jokesService: JokesBaseService, private dialog: MatDialog, private toasterService: ToasterService) { }

    ngOnInit() {
        this.getNextJoke();
    }

    getNextJoke() {
        this.jokesService.getRandomJoke().subscribe( result => {
            this.joke = result
        });
    }

    openDialog(): void {
        const dialogRef = this.dialog.open(AddJokeDialogComponent,{data: {
            categoryId: '',
            content: ''
        }});
    
        dialogRef.afterClosed().subscribe(result => {
            const addingResult = this.jokesService.addJoke(result.categoryId,result.content);
            if(addingResult) {
                this.toasterService.showToaster('Żart został pomyślnie dodany','Sukces','toaster--ok');
            } else {
                this.toasterService.showToaster('Nie udało się dodać nowego żartu','Niepowodzenie','toaster--warn');
            }
        });
    }
}