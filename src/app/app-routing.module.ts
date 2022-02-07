import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaDeInvestimentosComponent } from './lista-de-investimentos/lista-de-investimentos.component';
import { ResgatePersonalizadoComponent } from './resgate-personalizado/resgate-personalizado.component';

const routes: Routes = [
  { path: '', component: ListaDeInvestimentosComponent },
  { path: 'listaDeInvestimentos', component: ListaDeInvestimentosComponent },
  { path: 'resgatePersonalizado', loadChildren: () => import('./resgate-personalizado/resgate-personalizado.module').then(m => m.ResgatePersonalizadoModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
   
 }
