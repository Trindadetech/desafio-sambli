import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyBrazilPipe } from './components/pipes/currencybrazil/currencybrazil.pipe';


@NgModule({
  declarations: [
    CurrencyBrazilPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CurrencyBrazilPipe
  ],
})
export class SharedModule { }
