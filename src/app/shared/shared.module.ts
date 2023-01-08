import { NgModule } from '@angular/core';

import { MenuComponent } from './menu/menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select'; 
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { AddJokeDialogComponent } from './addJoke/addJokeDialog.component';
import { CoreModule } from '../core/core.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        CoreModule,
        FormsModule,
        AppRoutingModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatDialogModule,
        MatInputModule,
        MatSelectModule,
        LayoutModule
    ],
    exports: [MenuComponent, AddJokeDialogComponent],
    declarations: [MenuComponent, AddJokeDialogComponent],
    providers: [],
})
export class SharedModule { }
