import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddJokeDialogComponent } from './addJokeDialog.component';
import { BehaviorSubject } from 'rxjs';
import { JokesBaseService } from 'src/app/core/services/jokesBase.service';
import { ToasterService } from '../toaster/toaster.service';

@Injectable({providedIn: 'root'})
export class AddJokeDialogService {
    private dialogRef: MatDialogRef<AddJokeDialogComponent, any> | undefined;
    public hasBeenAddedSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(private dialog: MatDialog, private jokesService: JokesBaseService, private toasterService: ToasterService) { }
    
    openDialog(dialogInputData: any) {
        this.hasBeenAddedSubject$.next(false);
        this.dialogRef = this.dialog.open(AddJokeDialogComponent,{data: dialogInputData});
        this.dialogRef.afterClosed().subscribe(result => this.closeDialog(result));
    }

    closeDialog(closeResult: any) {
        if (!closeResult) {
            return;
        }
        this.jokesService.addJoke(closeResult.categoryId,closeResult.content).subscribe( addingResult => {
            if(addingResult) {
                this.toasterService.showToaster('Żart został pomyślnie dodany','Sukces','toaster--ok');
                this.hasBeenAddedSubject$.next(true)
            } else {
                this.toasterService.showToaster('Nie udało się dodać nowego żartu','Niepowodzenie','toaster--warn');
            }
        });
    }
}