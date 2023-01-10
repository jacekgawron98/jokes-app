import { Component } from '@angular/core';
import { ToasterService } from './toaster.service';

@Component({
    selector: 'toaster',
    template: `
        <div *ngIf='toasterService.showToast$ | async' class='toaster' [class]='toasterService.type$ | async'>
            <div class='toaster__content message'>
                <span class='message__title'>{{toasterService.title$ | async}}</span>
                <span class='message__description'>{{toasterService.message$ | async}}</span>
            </div>
            <div class='toaster__actions'>
                <mat-icon class='close-icon' (click)='hideToaster()'>close</mat-icon>
            </div>
        </div>
    `,
    styleUrls: ['./toaster.component.scss']
})

export class ToasterComponent {
    public title: string = 'Title';
    public message: string = 'Placeholder toast';
    public showToast: boolean = true;
    public type: string = 'Success';
    constructor(public toasterService: ToasterService) { }

    hideToaster() {
        this.toasterService.hideToaster();
    }
}