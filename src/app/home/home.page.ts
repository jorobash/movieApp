import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  opts = {
    slidesPerView: 2.4,
    spaceBetween: 10,
    slidesOffsetBefore: 10  
  };

  trending = [];
  searchActive = false;
  searchResults = [];

  constructor(private api: ApiService) {}

  ionViewWillEnter(){
    this.loadTrending();
  }

  loadTrending(){
    this.api.getTrending().subscribe(res => {
      this.trending = res;
      console.log(this.trending);
    })
  }

  searchChanged(e){
    const search = e.detail.value;
    console.log('search: ', e);

    if(search != ''){
      this.searchActive = true;
      this.api.getSearchResults(search).subscribe(res => {
        console.log('resultsSearch:',res);
        this.searchResults = res;
      });
    }else{
      this.searchActive = false;
      this.searchResults = [];
    }
  }

}
