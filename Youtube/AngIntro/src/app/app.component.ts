import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 postarr : Array<string> = ['post1','post2','post3','post4','post5','post6',];
objArray : Array<any> = []
addNew(){
  this.objArray.push({id:7,postTitle: 'post7'});
}
remove(index: any){
this.objArray.splice(index, 1)
}
}
