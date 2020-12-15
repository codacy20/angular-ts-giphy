import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment';
import SearchResponseModel from '../common/models/search-response.model';
import { Subject } from 'rxjs/internal/Subject';


@Injectable({
  providedIn: 'root'
})
export class GiphyService implements OnDestroy {

  public recentSearch = new Subject<string>();
  public listrecentSearch: string[] = [];

  constructor(private http: HttpClient) {
    this.recentSearch.subscribe((input: string) => {
      this.listrecentSearch.push(input);
    });
  }

  getGiphyImages(query: string, limit: number, offset: number): Observable<SearchResponseModel> {
    return this.http.get<SearchResponseModel>(`${environment.baseurl}?api_key=${environment.apikey}&q=${query}&limit=${limit}&offset=${offset}`);
  }

  ngOnDestroy(): void {
    this.recentSearch.unsubscribe();
  }
}
