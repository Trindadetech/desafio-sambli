import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResgatePersonalizado } from './models/resgate-personalizado.model';

@Component({
  selector: 'app-resgate-personalizado',
  templateUrl: './resgate-personalizado.component.html',
  styleUrls: ['./resgate-personalizado.component.css']
})
export class ResgatePersonalizadoComponent implements OnInit {
  public model: ResgatePersonalizado = new ResgatePersonalizado();
  public form: FormGroup;
  saldoAcumulado1: any;
  validacao: boolean = true;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
  ) {
    if (this.router.getCurrentNavigation() != null) {
      const currentState = this.router.getCurrentNavigation()?.extras?.state;
      if (!currentState?.['model']) {
      }
      this.model.fromAPI(currentState?.['model']);
      console.log(this.model, 'O Trindade passou por aqui');
    }
    this.form = this.formBuilder.group(this.model.toFormGroup());
  }

  ngOnInit(): void {
  }

  saldoAcumulado(item: any) {
    if (this.model.saldoTotal) {
      this.saldoAcumulado1 = this.model.saldoTotal * item.percentual / 100;
      return this.saldoAcumulado1;
    }
  }

  changeSMSMessage(evento: any, item: any) {
   /*  console.log(evento.target.value); */
    /*    let digitado = evento.target.value - os 3 caracteres */
    const str = evento.target.value
    const strFormat = str.replace(/[^0-9,'.']/g, '')
    /* console.log(strFormat) // 1000000 */

  /*   console.log(item);
    console.log('saldo', this.saldoAcumulado(item)) */
    if (strFormat > this.saldoAcumulado(item)) {
      alert('valor erro')
    }



  }
}
