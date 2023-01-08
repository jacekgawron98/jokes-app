import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class ToasterService {
    public showToast$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public title$: BehaviorSubject<string> = new BehaviorSubject<string>('Placeholder title');
    public message$: BehaviorSubject<string> = new BehaviorSubject<string>('Placeholder toast message');
    public type$: BehaviorSubject<ToasterType> = new BehaviorSubject<ToasterType>('toaster--info');  
    constructor() { }
    
    showToaster(message: string, title: string, type: ToasterType) {
        this.message$.next(message);
        this.title$.next(title);
        this.type$.next(type);
        this.showToast$.next(true);
    }

    hideToaster() {
        this.showToast$.next(false);
    }
}