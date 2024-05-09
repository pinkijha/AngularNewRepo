import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'AngIntro';
  message: string = 'Hey! I am your Parents..'

  /// access data from child(post) component
  postMessage! : string;
  @ViewChild(PostComponent)  postChild: any;
 
  ngAfterViewInit(): void {
      console.log(this.postChild);
      this.postMessage = this.postChild.fromPostChild;
  }
 
}
