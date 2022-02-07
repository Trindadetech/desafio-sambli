import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencybrazil'
})
export class CurrencyBrazilPipe implements PipeTransform {

  transform(value: any): any {
    if (!value) {
      value = 0;
    }
    return new CurrencyPipe('pt-BR').transform(value, 'BRL');
  }
}
