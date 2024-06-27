import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../header/components/header.component';
import { FooterComponent } from '../../footer/components/footer.component';
import { NewsService, News } from '../../news-service/news.service'; // Importando a interface News do NewsService
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  news: News[] = [];
  slideIndex = 1;
  newsLoaded = false;

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      this.news = data;
      this.newsLoaded = true; // Marcamos que as notícias foram carregadas
      this.showSlides(this.slideIndex); // Chamamos showSlides após carregar as notícias
    });
  }

  plusSlides(n: number) {
    this.showSlides(this.slideIndex += n);
  }

  currentSlide(n: number) {
    this.showSlides(this.slideIndex = n);
  }

  showSlides(n: number) {
    if (!this.newsLoaded) {
      return; // Se as notícias não foram carregadas, não faz nada
    }

    let i;
    const slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    const dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;

    if (n > slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[this.slideIndex - 1].style.display = "block";
    dots[this.slideIndex - 1].className += " active";
  }

  openNews(n:any){
    console.log(n);
  }
}
