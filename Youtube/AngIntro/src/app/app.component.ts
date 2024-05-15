import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 postarr : Array<string> = ['post1','post2','post3','post4','post5','post6',];
objArray : Array<any> = [
  {id: 1, postTitle: 'post1'},
  {id: 2, postTitle: 'post2'},
  {id: 3, postTitle: 'post3'},
  {id: 4, postTitle: 'post4'},
  {id: 5, postTitle: 'post5'},
  {id: 6, postTitle: 'post6'},
]
post: any;

addNew(){
  this.objArray.push({id:7,postTitle: 'post7'});
}

remove(post: any){
let index = this.objArray.indexOf(post);
this.objArray.splice(index, 1)
}

}
