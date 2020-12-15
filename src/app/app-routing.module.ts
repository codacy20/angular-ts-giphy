import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  },
  {
    path: '**',
    redirectTo: '',
    loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
