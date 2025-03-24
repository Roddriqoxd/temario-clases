import { Routes } from '@angular/router';
import { SintaxisComponent } from './2. sintaxis HTML/sintaxis/sintaxis.component';
import { OperadoresComponent } from './3. operadores HTML/operadores/operadores.component';
import { SecundarioComponent } from './6. rutas/secundario/secundario.component';
import { securityGuard } from './guards/security.guard';
import { TerceroComponent } from './6. rutas/tercero/tercero.component';

export const routes: Routes = [
  {
    path: 'sintaxis',
    component: SintaxisComponent
  },
  {
    path: 'operadores',
    component: OperadoresComponent,
    canActivate: [securityGuard]
  },
  {
    path: 'parametros/:nombre',
    component: TerceroComponent,
  },
  {
    path: 'ciclos-vida',
    loadComponent: () => import('./7.Ciclos de vida/principal/principal.component')
  },
  {
    path: 'rutas-hijas',
    component: SecundarioComponent,
    children: [
      {
        path: 'hijo1',
        component: SintaxisComponent
      },
      {
        path: 'hijo2',
        component: OperadoresComponent
      },
    ]
  },
  {
    path: '',
    redirectTo: '/sintaxis',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/sintaxis',
  }
];
