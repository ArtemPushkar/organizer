import { Component } from '@angular/core';
import { DateService } from '../share/date.services';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent {

  constructor(private dateService: DateService) { }

}
