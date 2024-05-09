import { Component, Input, ViewChild, AfterViewInit } from '@angular/core';
import { PostListComponent } from '../post-list/post-list.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit{
  title: string = 'List of Posts';
  postParentMessage: string = 'message from post'
  message! : string;

  @Input() fromParent! : string;
  @ViewChild(PostListComponent) fromChild: any;

  constructor(){
    console.log(this.fromChild);
  }

  ngAfterViewInit(): void {
    console.log(this.fromChild);
    this.message = this.fromChild.postFromChild;
  }
  
}
