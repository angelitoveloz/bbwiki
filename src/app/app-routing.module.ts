import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetterCallSaulComponent } from './pages/better-call-saul/better-call-saul.component';
import { CharacterDetailComponent } from './pages/character-detail/character-detail.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';

const routes: Routes = [
  { path: 'Home', component: WelcomeComponent },
  { path: 'BreakingBad', component: CharactersComponent },
  { path: 'BetterCallSaul', component: BetterCallSaulComponent },
  { path: 'Character/:charId', component: CharacterDetailComponent },
  { path: '**', redirectTo: 'Home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
