import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule) },
  { path: 'role-selection', loadChildren: () => import('./pages/role-selection/role-selection.module').then(m => m.RoleSelectionPageModule) },
  { path: 'pasajero', loadChildren: () => import('./pasajero/pasajero.module').then(m => m.PasajeroPageModule) }, 
  { path: 'conductor', loadChildren: () => import('./conductor/conductor.module').then(m => m.ConductorPageModule) },
  { path: 'perfil', loadChildren: () => import('./pages/perfil/perfil.module').then(m => m.PerfilPageModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
