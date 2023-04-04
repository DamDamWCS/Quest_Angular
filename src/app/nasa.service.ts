import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { ImageOfTheDay } from './models/imageOfTheDay.model';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  private apiKey = 'Yt7G3vKV80Sp6UkTtoOurTGxRsqbU7IHjZHkGe28'; 
  constructor(public http: HttpClient) { }

  public getImageOfTheDay(): Observable<ImageOfTheDay> {
    const url = `https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}`;
    return this.http.get<ImageOfTheDay>(url);
  }
}
