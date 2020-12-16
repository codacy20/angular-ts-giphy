import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { SearchLayoutComponent } from "./search-layout/search-layout.component";
import { RecentSearchesComponent } from "./recent-searches/recent-searches.component";
import { SearchResultComponent } from "./search-result/search-result.component";
import { SearchInputComponent } from "./search-input/search-input.component";
import { RouterModule } from "@angular/router";
import { PaginationComponent } from "./pagination/pagination.component";
import { GiphyService } from "./giphy.service";

@NgModule({
  declarations: [
    SearchLayoutComponent,
    RecentSearchesComponent,
    SearchResultComponent,
    SearchInputComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "",
        component: SearchLayoutComponent,
      },
    ]),
  ],
  providers: [GiphyService],
})
export class SearchModule {}
