import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { Cocktail } from './models/coktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(public http: HttpClient) { }

  public getCocktails():Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>("assets/cocktails.json");
  }
}
