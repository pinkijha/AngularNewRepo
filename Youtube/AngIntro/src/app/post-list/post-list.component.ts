import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {

  //called parent to child  
  @Input() postParent! : string ;

  // variable for parent(post) component
  postFromChild :string = 'Data from post-list, i am your child';


  // message from child component via output decorator
  // 


}
