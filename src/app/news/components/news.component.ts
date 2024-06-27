import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/components/header.component';
import { FooterComponent } from '../../footer/components/footer.component';
import { ActivatedRoute } from '@angular/router';
import { NewsService, News } from '../../news-service/news.service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MatIconModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
  id: any;
  news: News[] = [];
  newURL: any;
  newsLoaded = false;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService
  ){
  }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      this.news = data;
    });

    this.id = this.route.snapshot.paramMap.get('id');

    this.newURL = this.searchNewsById(this.id);
  }


  searchNewsById(id: number): News | undefined {
    return this.news.find(news => news.id == id);
  }

}
