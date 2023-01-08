import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export abstract class JokesBaseService {
    constructor() { }
    abstract getJokes(): Observable<Joke[]>;
    abstract getRandomJoke(): Observable<Joke>;
    abstract getCategories(): Observable<Category[]>;
    abstract getCategory(id: string): Observable<Category|undefined>;

    abstract addJoke(categoryId: string, content: string): Observable<boolean>;
    abstract deleteJoke(id: string | undefined): Observable<boolean>;
}