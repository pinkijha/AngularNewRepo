import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  constructor(private titleService: Title){
    this.titleService.setTitle('bigBasket - Products')
  }

}
