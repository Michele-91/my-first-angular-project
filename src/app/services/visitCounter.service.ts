import { Injector, Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class VisitCounterService {
    count = 0;
    get message() {
        return `You have been visiting this website for ${this.count} seconds`;
    }

    timerId = setInterval(() => {
        this.count++;
    }, 1000);

    resetCounter() {
        this.count = 0;
    }
}
