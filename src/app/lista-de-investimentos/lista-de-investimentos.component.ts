import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ListaDeInvestimentoService } from './services/lista-de-investimento.service';

@Component({
  selector: 'lista-de-investimentos',
  templateUrl: './lista-de-investimentos.component.html',
  styleUrls: ['./lista-de-investimentos.component.css']
})
export class ListaDeInvestimentosComponent implements OnInit {
  investimentos: any;
  constructor(
    public router: Router,
    private readonly listadeInvestimentoService: ListaDeInvestimentoService,
  ) { }

  ngOnInit(): void {
    this.get()

  }
  get() {
    this.listadeInvestimentoService.getInvestimento().subscribe((response: any) => {
      this.investimentos = response.response.data.listaInvestimentos,
        console.log(response.response.data.listaInvestimentos);
    });
  }

  public indicadorCarencia(item: any) {
    console.log(item)
    if (item.indicadorCarencia === 'N') {
      const navigationExtras: NavigationExtras = {
        state: {
          model: item,
        },
      };
      this.router.navigate(['/resgatePersonalizado'], navigationExtras);
    }
  }
}

