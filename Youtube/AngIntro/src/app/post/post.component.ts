import { Component, Input, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
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
  fromPostChild: string = 'Hey! i am child from post component';

  // outputDecoretor(as a parent)
  fromChildOutput!: string;
  recieveMessage($event: any) {
    this.fromChildOutput = $event;
  }

  // // outputDecoretor(as a child)
  fromPostOutput: string = 'The data coming from post component via @output Decorator';
  @Output() messageEventPost = new EventEmitter<string>();

  sendMessagePost(){
    this.messageEventPost.emit(this.fromChildOutput);
  }
}
