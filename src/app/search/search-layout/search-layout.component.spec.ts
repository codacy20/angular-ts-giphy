import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationComponent } from '../pagination/pagination.component';
import { RecentSearchesComponent } from '../recent-searches/recent-searches.component';
import { SearchInputComponent } from '../search-input/search-input.component';
import { SearchResultComponent } from '../search-result/search-result.component';
import { SearchLayoutComponent } from './search-layout.component';

describe('SearchLayoutComponent', () => {
  let component: SearchLayoutComponent;
  let fixture: ComponentFixture<SearchLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        SearchLayoutComponent,
        RecentSearchesComponent,
        SearchInputComponent,
        PaginationComponent,
        SearchResultComponent,
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
