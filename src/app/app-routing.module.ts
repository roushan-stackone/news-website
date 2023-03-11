import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryNewsComponent } from './components/country-news/country-news.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'country/:country', component: CountryNewsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
