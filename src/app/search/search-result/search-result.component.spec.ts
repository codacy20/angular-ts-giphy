import { HttpClientModule } from "@angular/common/http";
import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { GiphyService } from "../giphy.service";

import { SearchResultComponent } from "./search-result.component";

describe("ResultComponent", () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  function _getImageModelStub() {
    return [
      {
        url: "test-url",
        title: "test-testing",
        rating: "test-rating",
        images: {
          fixed_width: {
            url: "test-url",
            size: 24,
            width: 24,
            height: 24,
          },
        },
      },
      {
        url: "test-url",
        title: "test-testing",
        rating: "test-rating",
        images: {
          fixed_width: {
            url: "test-url",
            size: 24,
            width: 24,
            height: 24,
          },
        },
      },
    ];
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultComponent],
      imports: [HttpClientModule],
      providers: [GiphyService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render the images", () => {
    component.listrecentSearchLocal = _getImageModelStub();
    fixture.detectChanges();

    const debugEl: DebugElement = fixture.debugElement;
    expect(debugEl.queryAll(By.css(".tile")).length).toEqual(2);
  });

  it("clicking on the image should trigger an event", () => {
    const debugEl: DebugElement = fixture.debugElement;
    const onClickMock = spyOn(component, "navigate");

    component.listrecentSearchLocal = _getImageModelStub();
    fixture.detectChanges();

    debugEl.queryAll(By.css(".tile"))[0].triggerEventHandler("click", null);

    expect(onClickMock).toHaveBeenCalled();
  });
});
