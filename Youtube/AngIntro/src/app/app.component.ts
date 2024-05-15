import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 postarr : Array<string> = ['post1','post2','post3','post4','post5','post6',];

 constructor(){

 }
}
