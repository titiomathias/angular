import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/components/header.component';
import { FooterComponent } from '../../footer/components/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
