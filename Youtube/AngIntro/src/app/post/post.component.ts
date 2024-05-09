import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit {
  title: string = 'List of Posts';

  // accessing parent data from app.component.ts
  postParentMessage: string = 'message from post'
  @Input() fromParent!: string;


  // accessing child data from post-list
  message!: string;
  @ViewChild(PostListComponent) fromChild: any;
  constructor() {
    console.log(this.fromChild);
  }

  ngAfterViewInit(): void {
    console.log(this.fromChild);
    this.message = this.fromChild.postFromChild;
  }

  // making this post as a cild
  fromPostChild : string = 'Hey! i am child from post component';

  // outputDecoretor

  fromChildOutput! : string;
  recieveMessage($event: any){
    this.fromChildOutput = $event;
  }

}
