import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export abstract class JokesBaseService {
    constructor() { }
    abstract getJokes(): Joke[];
    abstract getRandomJoke(): Joke;
    abstract getCategories(): Category[];

    abstract addJoke(joke: Joke): boolean;
    abstract deleteJoke(is: string): boolean;
}