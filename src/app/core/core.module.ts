import { NgModule } from '@angular/core';
import { JokesBaseService } from './services/jokesBase.service';
import { MockJokesService } from './services/mockJokes.service';

@NgModule({
    imports: [],
    exports: [],
    declarations: [],
    providers: [{
        provide: JokesBaseService,
        useClass: MockJokesService
    }],
})
export class CoreModule { }
