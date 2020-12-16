import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import SearchResponseModel from 'src/app/common/models/search-response.model';
import { GiphyService } from '../giphy.service';
import { interval } from 'rxjs';
import { debounce, filter } from 'rxjs/operators';
import ImageModel from 'src/app/common/models/Image.model';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  searchControl = new FormControl('');
  response: SearchResponseModel;

  constructor(private giphyService: GiphyService) {
    this.searchControl.valueChanges
      .pipe(filter(input => input))
      .pipe(debounce(() => interval(1200)))
      .subscribe((input: string) => {
        this.search(input);
      });
  }

  ngOnInit(): void {
    this.search('Puppies');
  }

  search(input: string): void {
    this.giphyService.getGiphyImages(input, 3, 0).subscribe((response: SearchResponseModel) => {
      this.giphyService.listImages = response.data;
      this.giphyService.listrecentSearch.push(input);
      this.giphyService.recentSearch.next(input);
      this.giphyService.imageSearchResults.next();
      this.giphyService.pagination.next(response.pagination);
    });
  }

  ngOnDestroy(): void {
    this.giphyService.recentSearch.unsubscribe();
  }
}
