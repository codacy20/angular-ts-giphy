import { of } from "rxjs"; // Add imports
import { asyncData } from "./async-observable-helpers";
import { GiphyService } from "./giphy.service";
import SearchResponseModel from "../common/models/search-response.model";

describe("HeroesService (with spies)", () => {
  // #docregion test-with-spies
  let httpClientSpy: { get: jasmine.Spy };
  let giphyService: GiphyService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    giphyService = new GiphyService(httpClientSpy as any);
  });

  it("should return expected heroes (HttpClient called once)", () => {
    const expectedHeroes: SearchResponseModel = {
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

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    giphyService
      .getGiphyImages("", 1, 1)
      .subscribe(
        (heroes) => expect(heroes).toEqual(expectedHeroes, "expected heroes"),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, "one call");
  });

  it("should return a single user", () => {
    const expectedHeroes: SearchResponseModel = {
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
    spyOn(giphyService, "getGiphyImages").and.returnValue(of(expectedHeroes));

    giphyService.getGiphyImages("2", 1, 1).subscribe((res) => {
      response = res;
    });

    expect(response).toEqual(expectedHeroes);
  });
});
