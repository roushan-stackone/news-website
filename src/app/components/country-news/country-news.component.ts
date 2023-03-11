import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Article, Country } from 'src/app/data/models';
import { allNewsArticles, americaArticles, australiaArticles, indiaArticles, turkeyArticles } from 'src/app/data/news-articles-data';

@Component({
  selector: 'app-country-news',
  templateUrl: './country-news.component.html',
  styleUrls: ['./country-news.component.scss']
})
export class CountryNewsComponent implements OnInit {


  country!: Country;
  enumCountry = Country;

  newsArticles!: Article[];

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params: Params) => {
      this.country = params['country'];
      console.log(params, this.country);

      if (this.country === this.enumCountry.INDIA) {
        this.newsArticles = indiaArticles
      } else if (this.country === this.enumCountry.AMERICA) {
        this.newsArticles = americaArticles
      } else if (this.country === this.enumCountry.AUSTRALIA) {
        this.newsArticles = australiaArticles
      } else if (this.country === this.enumCountry.TURKEY) {
        this.newsArticles = turkeyArticles
      } else {
        this.newsArticles = allNewsArticles
      }
    })
  }

  ngOnInit(): void {
  }

}
