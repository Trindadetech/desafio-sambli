import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/core/services/http.service';

@Injectable({
  providedIn: 'root'
})
export class ListaDeInvestimentoService {
  constructor(private httpService: HttpService) {
 
  }

  public getInvestimento() {
    return this.httpService.get();
  }
}
