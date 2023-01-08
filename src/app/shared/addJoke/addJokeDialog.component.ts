import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';


@Component({
    selector: 'add-joke-dialog',
    template: `
        <div>
            <h1 mat-dialog-title>Dodawanie żartu</h1>
            <div mat-dialog-content class='dialog'>
                <div class='dialog__content'>
                <mat-form-field>
                    <mat-label>Wybierz kategorię</mat-label>
                    <mat-select (selectionChange)='onNewOptionSelected($event)'>
                        <mat-option *ngFor='let cat of selectOptions' [value]='cat.value'>
                            {{cat.viewValue}}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
                <mat-form-field>
                    <textarea matInput placeholder='Wprowadź treść żartu' [(ngModel)]='data.content'></textarea>
                </mat-form-field>
                </div>
            </div>
            <div mat-dialog-actions align='end'>
                <button mat-button color='primary' (click)='onNoClick()'>Anuluj</button>
                <button mat-flat-button color='primary' [mat-dialog-close]='data' cdkFocusInitial>Ok</button>
            </div>
        </div>
    `,
    styleUrls: ['./addJokeDialog.component.scss']
})

export class AddJokeDialogComponent implements OnInit {
    public selectOptions: {value: string, viewValue: string}[] = [];
    public categories: Category[] = []

    constructor(
        private jokesService: JokesBaseService,
        private dialogRef: MatDialogRef<AddJokeDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

    ngOnInit() { 
        this.categories = this.jokesService.getCategories();
        this.selectOptions = this.categories.map(cat => {
            return {
                value: cat.id,
                viewValue: cat.name
            }
        })
    }

    onNewOptionSelected(event: any) {
        this.data.categoryId = event.value;
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}