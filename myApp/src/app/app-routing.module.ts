import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'game-setup', loadChildren: './game-setup/game-setup.module#GameSetupPageModule' },
  { path: 'lobby', loadChildren: './lobby/lobby.module#LobbyPageModule' },
  { path: 'in-game', loadChildren: './in-game/in-game.module#InGamePageModule' },
  { path: 'deck-modal', loadChildren: './deck-modal/deck-modal.module#DeckModalPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
