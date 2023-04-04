import { Component } from '@angular/core';
import { ImageOfTheDay } from './models/imageOfTheDay.model';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bienvenue sur le site de DamDamWCS !';
  imgOfTheDay:ImageOfTheDay =new ImageOfTheDay;

  constructor(public nasaService: NasaService) { }

  ngOnInit(): void {
    this.nasaService.getImageOfTheDay().subscribe(dataImageOfTheDay => {
      this.imgOfTheDay = dataImageOfTheDay;
    });

  }
}
