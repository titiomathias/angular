import { Component } from '@angular/core';
import { HeaderComponent } from '../../header/components/header.component';
import { FooterComponent } from '../../footer/components/footer.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {

}
