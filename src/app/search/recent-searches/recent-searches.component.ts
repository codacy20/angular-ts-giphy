import { Component, OnDestroy, OnInit } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-recent-searches',
  templateUrl: './recent-searches.component.html',
  styleUrls: ['./recent-searches.component.scss']
})
export class RecentSearchesComponent implements OnInit, OnDestroy {

  listrecentSearchLocal: string[] = [];

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.giphyService.recentSearch.subscribe(() => {
      this.listrecentSearchLocal = this.giphyService.listrecentSearch;
    });
  }

  ngOnDestroy(): void {
    this.giphyService.recentSearch.unsubscribe();
  }
}
