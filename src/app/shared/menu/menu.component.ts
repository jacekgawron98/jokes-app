import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
    selector: 'menu-header',
    template: `
        <mat-toolbar class='menu'>
            <a routerLink='/'>
                <img src='assets/logo.svg'>
            </a>
            <div *ngIf='!isMobile'>
                <a mat-button routerLinkActive="menu__link--active" [routerLinkActiveOptions]="{exact: true}" class='menu__link' routerLink='/'>Żarty</a>
                <a mat-button routerLinkActive="menu__link--active" class='menu__link' routerLink='/my-jokes'>Moje żarty</a>
            </div>
            <button *ngIf='isMobile' mat-icon-button (click)='toggleMenuClicked.emit()'>
                <mat-icon>menu</mat-icon>
            </button>
        </mat-toolbar>
    `,
    host: {'class': 'menu-header'},
    styleUrls: ['../../app.component.scss'],
})

export class MenuComponent implements OnInit, OnDestroy {
    @Output() toggleMenuClicked: EventEmitter<any> = new EventEmitter();
    public isMobile: boolean = false;
    private subs: Subscription =  new Subscription

    constructor(private breakpointObserver: BreakpointObserver) { }

    ngOnInit() {
        this.subs.add(this.breakpointObserver.observe([
            "(max-width: 1080px)"
            ]).subscribe((result: BreakpointState) => {
                if (result.matches) {
                    this.isMobile = true;    
                } else {
                    this.isMobile = false;
                }
            })
        )
    }
    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }
}