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

  items: string[] = ['Item 1', 'Item 2', 'Item 3', 'Another Item'];
  filteredItems: string[] = [];

  constructor() {
    // Initialize filteredItems with all items
    this.filteredItems = this.items;
  }

  filterItems(searchTerm: string) {
    this.filteredItems = this.items.filter(item =>
      item.toLowerCase().includes(searchTerm.toLowerCase())      
    );
    
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
