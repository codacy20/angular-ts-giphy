import { of } from "rxjs"; // Add imports
import { asyncData } from "./async-observable-helpers";
import { GiphyService } from "./giphy.service";
import SearchResponseModel from "../common/models/search-response.model";
import { TestBed } from "@angular/core/testing";
import {
  HttpClientTestingModule,
  HttpTestingController,
} from "@angular/common/http/testing";
import { environment } from "src/environments/environment";

describe("GiphyService (with spies)", () => {
  // #docregion test-with-spies
  let httpClientSpy: { get: jasmine.Spy };
  let giphyServiceSpy: GiphyService;
  let giphyService: GiphyService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GiphyService],
    });
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    giphyServiceSpy = new GiphyService(httpClientSpy as any);

    httpTestingController = TestBed.inject(HttpTestingController);
    giphyService = TestBed.inject(GiphyService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it("should return expected data (HttpClient called once)", () => {
    const searchResponseModel: SearchResponseModel = {
      data: [
        {
          url: "",
          rating: "",
          title: "",
          images: { fixed_width: { url: "", width: 1, size: 1, height: 1 } },
        },
      ],
      pagination: {
        count: 1,
        offset: 1,
        total_count: 1,
      },
    };

    httpClientSpy.get.and.returnValue(asyncData(searchResponseModel));

    giphyServiceSpy
      .getGiphyImages("", 1, 1)
      .subscribe(
        (searchRes) => expect(searchRes).toEqual(searchResponseModel, "expected result"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  it("should return a single gif", () => {
    const searchResponseModel: SearchResponseModel = {
      data: [
        {
          url: "",
          rating: "",
          title: "",
          images: { fixed_width: { url: "", width: 1, size: 1, height: 1 } },
        },
      ],
      pagination: {
        count: 1,
        offset: 1,
        total_count: 1,
      },
    };
    let response;
    spyOn(giphyServiceSpy, "getGiphyImages").and.returnValue(of(searchResponseModel));

    giphyServiceSpy.getGiphyImages("dogs", 1, 1).subscribe((res) => {
      response = res;
    });

    expect(response).toEqual(searchResponseModel);
  });

  it("should get images", () => {
    const expectedImages: SearchResponseModel = _getSearchResponseModelStub();
    giphyService
      .getGiphyImages("test", 1, 0)
      .subscribe(
        (images) =>
          expect(images).toEqual(
            expectedImages,
            "should return expected images"
          ),
        null
      );

    const req = httpTestingController.expectOne(
      `${environment.baseurl}?api_key=${environment.apikey}&q=test&limit=1&offset=0`
    );
    expect(req.request.method).toEqual("GET");

    req.flush(expectedImages);
  });
});


function _getSearchResponseModelStub() {
  const searchResponseModel: SearchResponseModel = {
    data: [
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
    ],
    pagination: {
      count: 5,
      offset: 10,
      total_count: 99,
    },
  };

  return searchResponseModel;
}
