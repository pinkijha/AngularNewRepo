import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private titleService: Title, private router : Router){
    this.titleService.setTitle('bigBasket - login')
  }

  
  loginObj : any = {
    email: '',
    password: '',
  }

  onLogin() {
    if(this.loginObj.email == 'admin@gmail.com' && this.loginObj.password == 'Admin123'){
    this.router.navigateByUrl('/products');
    }
    else{
      alert('Wrong Credential')
    }
    }

}
