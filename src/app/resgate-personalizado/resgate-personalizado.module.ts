import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyModule } from 'ngx-currency';
import { ResgatePersonalizadoComponent } from './resgate-personalizado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResgateRoutingModule } from './resgate-personalizado-routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ResgatePersonalizadoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgxCurrencyModule,
    ResgateRoutingModule,
    SharedModule
  ]
})
export class ResgatePersonalizadoModule { }
