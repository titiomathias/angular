import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockNews } from './mock-news';

export interface News {
  id: number;
  image: string;
  title: string;
  link: string;
  author: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  constructor() { }

  getNews(): Observable<News[]> {
    return of(mockNews);
  }
}
