import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import SearchResponseModel, { PaginationModel } from '../common/models/search-response.model';
import ImageModel from '../common/models/Image.model';

@Injectable({
  providedIn: 'root'
})
export class GiphyService implements OnDestroy {

  public recentSearch = new Subject<string>();
  public imageSearchResults = new Subject<ImageModel>();
  public pagination = new Subject<PaginationModel>();
  public listrecentSearch: string[] = [];
  public listImages: ImageModel[] = [];

  constructor(private http: HttpClient) { }

  getGiphyImages(query: string, limit: number, offset: number): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>(`${environment.baseurl}?api_key=${environment.apikey}&q=${query}&limit=${limit}&offset=${offset}`);
  }

  ngOnDestroy(): void {
    this.recentSearch.unsubscribe();
    this.imageSearchResults.unsubscribe();
  }
}
