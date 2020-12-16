import { Component, OnDestroy } from '@angular/core';
import ImageModel from 'src/app/common/models/Image.model';
import SearchResponseModel, { PaginationModel } from 'src/app/common/models/search-response.model';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnDestroy {

  response: SearchResponseModel;
  pagination: PaginationModel = { count: 0, offset: 0, total_count: 0 };
  input: string;
  numbers: number[] = [];

  constructor(private giphyService: GiphyService) {
    this.giphyService.pagination.subscribe((pagination: PaginationModel) => {
      this.pagination = pagination;
    });
    this.giphyService.recentSearch.subscribe((input: string) => {
      this.input = input;
    });
  }

  pageEvent(input: number): void {
    let direction = 3;
    if (!input) { direction = -3; }
    this.giphyService.getGiphyImages(this.input, 3, this.pagination.offset + direction).subscribe((response: SearchResponseModel) => {
      this.giphyService.pagination.next(response.pagination);
      this.giphyService.listImages = response.data;
      this.giphyService.imageSearchResults.next();
    });
  }

  ngOnDestroy(): void {
    this.giphyService.recentSearch.unsubscribe();
  }
}
