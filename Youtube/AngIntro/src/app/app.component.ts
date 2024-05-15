import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textValue : string = 'cmpng from';


  logInputValue(){
    console.log(this.textValue);
  }
}
