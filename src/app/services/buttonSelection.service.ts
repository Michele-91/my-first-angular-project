import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from '../entities/Item';

@Injectable({
    providedIn: 'root'
})

export class TableSelect {
    show1 = false;
    show2 = false;

    subject = new Subject<boolean>();
    notifier = new Subject();
    movieList = new Subject<Item[]>();

}

