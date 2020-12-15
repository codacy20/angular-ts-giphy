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
  pagination: PaginationModel;
  input: string;

  constructor(private giphyService: GiphyService) {
    this.giphyService.pagination.subscribe((pagination: PaginationModel) => {
      this.pagination = pagination;
    });
    this.giphyService.recentSearch.subscribe((input: string) => {
      this.input = input;
    });
  }

  pageEvent(): void {
    this.giphyService.getGiphyImages(this.input, 3, this.pagination.offset + 3).subscribe((response: SearchResponseModel) => {
      this.giphyService.pagination.next(response.pagination);
      response.data.forEach((item: ImageModel) => {
        this.giphyService.imageSearchResults.next(item);
        this.giphyService.pagination.next(response.pagination);
      });
    });
  }

  ngOnDestroy(): void {
    this.giphyService.recentSearch.unsubscribe();
  }
}
