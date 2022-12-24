import { Component, OnInit } from '@angular/core';
import { DateService } from '../share/date.service';

import * as moment from 'moment';


@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(private dateService: DateService) {}
}
