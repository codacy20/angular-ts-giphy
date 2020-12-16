import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GiphyService } from '../giphy.service';

import { SearchResultComponent } from './search-result.component';

describe('ResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchResultComponent ],
      imports: [HttpClientModule],
      providers: [GiphyService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
