import { NgModule } from '@angular/core';

import { JokePageComponent } from './pages/jokePage.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { MatButtonModule } from '@angular/material/button'; 
import { JokeCardComponent } from './components/jokeCard.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        CoreModule,
        MatProgressSpinnerModule,
        MatCardModule,
        MatButtonModule
    ],
    exports: [JokePageComponent],
    declarations: [JokePageComponent, JokeCardComponent],
    providers: [],
})
export class JokeModule { }
