import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./page/home-page/home-page.module').then( m => m.HomePagePageModule)
  },
  {
    path: 'restaurant-detail/:id',
    loadChildren: () => import('./page/restaurant-detail-page/restaurant-detail-page.module').then( m => m.RestaurantDetailPagePageModule)
  },
  {
    path: 'restaurant-form',
    loadChildren: () => import('./page/restaurant-form-page/restaurant-form-page.module').then( m => m.RestaurantFormPagePageModule)
  },  {
    path: 'restaurant-administration',
    loadChildren: () => import('./page/restaurant-administration/restaurant-administration.module').then( m => m.RestaurantAdministrationPageModule)
  },
  {
    path: 'recherche-restaurant',
    loadChildren: () => import('./page/recherche-restaurant/recherche-restaurant.module').then( m => m.RechercheRestaurantPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
