import { NgModule } from '@angular/core';

import { MyJokesPageComponent } from './pages/myJokesPage.component';
import { CoreModule } from '../core/core.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatButtonModule } from '@angular/material/button'; 
import { MyJokeCardComponent } from './components/myJokeCard.component';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        CoreModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [MyJokesPageComponent, MyJokeCardComponent],
    declarations: [MyJokesPageComponent, MyJokeCardComponent],
    providers: [],
})
export class MyJokesModule { }
