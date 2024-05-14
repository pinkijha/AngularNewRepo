import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bool: boolean = true; //class & style binding 

   /* // eventClick 
  genAlert(){
    alert("You clicked me!")
  }
 */

  onkeyup($event: any){
  // alert($event.keyCode);

  // traditional method for Eventfiltering
  if($event.keyCode == 13){
    console.log('enter key pressed');
  }
  

  }


/* 
  mainTitle :string = 'Main Component'; //string interpolation

  // property binding
  imgUrls : string = 'https://www.21kschool.com/us/wp-content/uploads/sites/37/2022/10/5-ways-to-incorporate-coding-into-your-classroom.png';
  
  title = 'AngIntro'; //interpolation
  message: string = 'Hey! I am your Parents..'

  /// access data from child(post) component
  postMessage! : string;
  @ViewChild(PostComponent)  postChild: any;
 
  ngAfterViewInit(): void {
      console.log(this.postChild);
      this.postMessage = this.postChild.fromPostChild;
  }


  // @output Decorator
  fromChildOutputPost!: string;
  recieveMessagePost($event :any){
    this.fromChildOutputPost = $event;
  } */
}
