import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  expression = false;

  onSayHi(text: string) {
    console.log(text)
  }
  
age = 18;

}
