import { Component, OnDestroy, OnInit } from "@angular/core";
import { ImageModel } from "src/app/common/models/Image.model";
import { GiphyService } from "../giphy.service";

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.scss"],
})
export class SearchResultComponent implements OnInit, OnDestroy {
  listrecentSearchLocal: ImageModel[] = [];

  constructor(private giphyService: GiphyService) { }

  ngOnInit(): void {
    this.giphyService.imageSearchResults.subscribe(() => {
      this.listrecentSearchLocal = this.giphyService.listImages;
    });
  }

  navigate(url: string) {
    window.open(url, "_blank");
  }

  ngOnDestroy(): void {
    this.giphyService.imageSearchResults.unsubscribe();
  }
}
