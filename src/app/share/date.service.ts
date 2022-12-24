import { Injectable, OnInit } from "@angular/core";
import * as moment from 'moment';
import { Moment } from 'moment';
import { BehaviorSubject } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class DateService implements OnInit {
    currentTime: any;

    public date: BehaviorSubject<Moment> = new BehaviorSubject(moment());

    ngOnInit(): void {
        this.currentTime = moment().format("MMM Do YY");  
    }
}

