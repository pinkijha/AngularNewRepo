import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { constant } from '../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }



  getCategory(){
    return this.http.get(constant.API_End_POINT + constant.METHODS.GET_ALL_CATEGORY);
  }

  getProducts(){
    return this.http.get(constant.API_End_POINT + constant.METHODS.GET_ALL_PRODUCTS);
  }

  saveProduct(obj : any){
    return this.http.post(constant.API_End_POINT + constant.METHODS.CREATE_PRODUCT, obj);
  }
}
