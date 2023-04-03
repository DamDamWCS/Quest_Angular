import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { DeveloperComponent } from './developer/developer.component';
import { SkillComponent } from './skill/skill.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    MenuComponent,
    SignupComponent,
    DeveloperComponent,
    SkillComponent,
    CocktailListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
