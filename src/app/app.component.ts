import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <menu-header (toggleMenuClicked)='sidenav.toggle()'></menu-header>
    <mat-sidenav-container>
      <mat-sidenav #sidenav position='end' mode='over' >
        <div class="sidenav">
          <a mat-button routerLinkActive="menu__link--active" [routerLinkActiveOptions]="{exact: true}" class='menu__link' routerLink='/'>Żarty</a>
          <a mat-button routerLinkActive="menu__link--active" class='menu__link' routerLink='/my-jokes'>Moje żarty</a>
        </div>
      </mat-sidenav>
      <router-outlet></router-outlet>
    </mat-sidenav-container>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jokes-app';
}
