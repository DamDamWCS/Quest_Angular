import { Injectable } from '@angular/core';
import { Cocktail } from './models/coktail.model';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  public getCocktails():Cocktail[] {
    return [
      new Cocktail("Mojito","du rhum, de la menthe et du citron"),
      new Cocktail("Tit ponch","du rhum et du sucre"),
      new Cocktail("Chien enragé","Vodka et tabasco"),
    ]
  }
}
