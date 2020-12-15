import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchLayoutComponent } from './search-layout/search-layout.component';
import { RecentSearchesComponent } from './recent-searches/recent-searches.component';
import { SearchResultComponent } from './result/search-result.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { RouterModule } from '@angular/router';
import { PaginationComponent } from './pagination/pagination.component';


@NgModule({
  declarations: [
    SearchLayoutComponent,
    RecentSearchesComponent,
    SearchResultComponent,
    SearchInputComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SearchLayoutComponent
      }
    ])
  ]
})
export class SearchModule { }
