import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GiphyService } from "../giphy.service";

import { RecentSearchesComponent } from "./recent-searches.component";

describe("RecentSearchesComponent", () => {
  let component: RecentSearchesComponent;
  let fixture: ComponentFixture<RecentSearchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentSearchesComponent],
      imports: [HttpClientModule],
      providers: [GiphyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentSearchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
