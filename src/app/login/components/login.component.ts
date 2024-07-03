import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/components/header.component';
import { FooterComponent } from '../../footer/components/footer.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/painel']);
    } 
  }

  onSubmit() {
    const name = this.loginForm.value.name;
    const password = this.loginForm.value.password;
    if (!this.authService.login(name, password)) {
      console.log("erro")
    }
  }
}