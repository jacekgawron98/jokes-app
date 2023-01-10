import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'configm-dialog',
    template: `
            <div>
            <h1 mat-dialog-title>{{data.title}}</h1>
            <div mat-dialog-content class='dialog'>
                <div class='dialog__content'>
                    {{data.description}}
                </div>
            </div>
            <div mat-dialog-actions align='end'>
                <button mat-button color='primary' [mat-dialog-close]='false' (click)='onNoClick()'>Nie</button>
                <button mat-flat-button color='primary' [mat-dialog-close]='true' cdkFocusInitial>Tak</button>
            </div>
        </div>
    `
})

export class ConfirmDialogComponent {
    constructor(
        private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: {title: string, description: string},
    ) {}

    onNoClick(): void {
        this.dialogRef.close();
    }
}