import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  // create variable to send this child to parent

  outputChildMessage : string = 'message from child component via output decorator';

  // create eventEditor with the output decorator
   @Output() messageEvent = new EventEmitter<string>()

   sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);  
   }

}
