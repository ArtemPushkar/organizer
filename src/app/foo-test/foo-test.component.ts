import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foo-test',
  templateUrl: './foo-test.component.html',
  styleUrls: ['./foo-test.component.scss']
})
export class FooTestComponent implements OnInit {
  ngOnInit(): void {
    console.log('constuctor', this.title)
  }
  @Input()
  title!: string;
  
  constructor() { 
    console.log('constuctor', this.title);
  }

  

}
