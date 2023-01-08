import { NgModule } from '@angular/core';

import { JokePageComponent } from './pages/jokePage.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule
    ],
    exports: [JokePageComponent],
    declarations: [JokePageComponent],
    providers: [],
})
export class JokeModule { }
