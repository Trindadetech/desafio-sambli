import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CurrencyMaskConfig, NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './core/services/http.service';
import { ListaDeInvestimentosComponent } from './lista-de-investimentos/lista-de-investimentos.component';
import { ListaDeInvestimentoService } from './lista-de-investimentos/services/lista-de-investimento.service';
import { ModalConfirmComponent } from './resgate-personalizado/components/modal-confirm/modal-confirm.component';

import { LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt, 'pt-BR');

export const customCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "left",
  allowNegative: true,
  allowZero: true,
  decimal: ".",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: "",
  nullable: true
};

@NgModule({
  declarations: [
    AppComponent,
    ListaDeInvestimentosComponent,
    ModalConfirmComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig),
  ],
  providers: [
    HttpService,
    ListaDeInvestimentoService,
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
