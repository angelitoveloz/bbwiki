import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { BetterCallSaulComponent } from './pages/better-call-saul/better-call-saul.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    BetterCallSaulComponent,
    CharacterDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
