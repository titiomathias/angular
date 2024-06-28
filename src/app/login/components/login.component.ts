import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/components/header.component';
import { FooterComponent } from '../../footer/components/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {

  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    if(this.loginForm.value.name == "admin" && this.loginForm.value.password == "2077"){
      console.log("Logado")
    }
  }
}
