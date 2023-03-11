import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/data/models';
import { allNewsArticles } from 'src/app/data/news-articles-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  articles: Article[] = allNewsArticles;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
