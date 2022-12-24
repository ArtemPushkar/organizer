import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-foo-test',
  templateUrl: './foo-test.component.html',
  styleUrls: ['./foo-test.component.scss']
})


export class FooTestComponent implements OnInit {

  @Input()
  title!: string;
  
  constructor() { 
    console.log('constuctor', this.title);
  }
  ngOnInit(): void {
    console.log('constuctor', this.title)
  }
  
  @Output()
  sayHi = new EventEmitter<string>()

  onSayHi() {
    this.sayHi.emit(this.title + 'hello!')
  }


  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>()

}
