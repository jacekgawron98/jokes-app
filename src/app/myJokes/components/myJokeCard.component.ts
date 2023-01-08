import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirmDialog/confirmDialog.component';
import { ToasterService } from 'src/app/shared/toaster/toaster.service';

@Component({
    selector: 'my-joke-card',
    template: `
        <mat-card class='my-joke-card'>
            <mat-card-content *ngIf="joke">
                <div class='my-joke-card__right-aligned my-joke-card__right-aligned--small'>
                    kategoria:&nbsp;<b>{{joke.category?.name}}</b>
                </div>
                <div class='my-joke-card__content'>{{joke.content}}</div>
                <div class='my-joke-card__right-aligned'>
                    <button mat-flat-button color='warn' (click)='openDialog()'>Usuń</button>
                </div>
            </mat-card-content>
        </mat-card>
    `,
    styleUrls: ['./myJokeCard.component.scss']
})

export class MyJokeCardComponent implements OnInit {
    @Input() joke: Joke | undefined = undefined;
    @Output() jokeDeleted = new EventEmitter<string>()
    constructor(private jokesService: JokesBaseService, private dialog: MatDialog, private toasterService: ToasterService) { }

    ngOnInit() { }

    openDialog() {
        const dialogRef = this.dialog.open(ConfirmDialogComponent,{data: {
            title: 'Potwierdzenie', 
            description: 'Czy na pewno chcesz usunąć wybrany żart?'
        }});
    
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                const deleteResult = this.jokesService.deleteJoke(this.joke?.id)
                if (deleteResult) {
                    this.toasterService.showToaster('Żart został pomyślnie usunięty','Sukces','toaster--ok')
                    this.jokeDeleted.emit(this.joke?.id);
                } else {
                    this.toasterService.showToaster('Nie udało sie usunąć żartu', 'Niepowodzenie', 'toaster--warn')
                }
            }
        });
    }
}