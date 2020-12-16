import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import ImageModel from 'src/app/common/models/Image.model';
import SearchResponseModel, { PaginationModel } from 'src/app/common/models/search-response.model';
import { GiphyService } from '../giphy.service';

export enum Direction {
  forward = 3,
  backward = -3
}

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnDestroy {

  response: SearchResponseModel;
  pagination: PaginationModel = { count: 0, offset: 0, total_count: 0 };
  input: string;
  public availablePages = [];
  currentPage = 1;
  RECORDSPERPAGE = 3;

  constructor(private giphyService: GiphyService) {
    this.giphyService.pagination.subscribe((pagination: PaginationModel) => {
      this.pagination = pagination;
      this.definePagination();
    });
    this.giphyService.recentSearch.subscribe((input: string) => {
      this.input = input;
      this.currentPage = 1;
      this.definePagination();
    });
  }

  changePage(direction: Direction) {
    this.giphyService.getGiphyImages(this.input, 3, this.pagination.offset + direction).subscribe((response: SearchResponseModel) => {
      this.giphyService.pagination.next(response.pagination);
      this.giphyService.listImages = response.data;
      this.giphyService.imageSearchResults.next();
    });
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.changePage(Direction.backward);
    }
  }

  nextPage() {
    if (this.currentPage < this.numPages()) {
      this.currentPage++;
      this.changePage(Direction.forward);
    }
  }

  numPages() {
    return Math.ceil(this.pagination.total_count / this.RECORDSPERPAGE);
  }

  definePagination() {
    if (this.pagination.offset === 0) {
      this.availablePages = [];
      for (let i = this.currentPage; i <= this.numPages(); i++) { this.availablePages.push(i); }
    }
  }

  ngOnDestroy(): void {
    this.giphyService.recentSearch.unsubscribe();
  }
}
