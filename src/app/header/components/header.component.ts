import { Component } from '@angular/core';
import { LineLastNewsComponent } from '../line-last-news/components/line-last-news.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LineLastNewsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
