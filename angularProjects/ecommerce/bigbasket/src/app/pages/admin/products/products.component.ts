import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

isSidePanelVisible: boolean = false;
productobj : any = {
  
    "ProductId": 0,
    "ProductSku": "string",
    "ProductName": "string",
    "ProductPrice": 0,
    "ProductShortName": "string",
    "ProductDescription": "string",
    "CreatedDate": "2024-04-29T13:54:49.193Z",
    "DeliveryTimeSpan": "string",
    "CategoryId": 2147483647,
    "ProductImageUrl": "string"
  
}

openSidePanel(){
  this.isSidePanelVisible = true;
}

closeSidePanel(){
  this.isSidePanelVisible = false;
}

}
