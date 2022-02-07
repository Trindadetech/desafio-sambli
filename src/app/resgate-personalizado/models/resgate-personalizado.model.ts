import { FormControl, Validators } from "@angular/forms";

export class ResgatePersonalizado {
    static compara: number = 10;
    acoes?: any;
    nome?: string;
    objetivo?: string;
    saldoTotal?: number;
    percentual?: number;
    valorResgatar?: number

    fromAPI(json: any) {
        Object.assign(this, json);
    }

    public toFormGroup() {
        return {
            valorResgatar: [this.valorResgatar, [Validators.required, ResgatePersonalizado.validacao.bind(this)]],
        }
    }

    static validacao(control: FormControl): boolean | null {
        console.log(control.value)
        let response = null;
        if (Number(control.value) > ResgatePersonalizado.compara) {
            response = true;
        } else {

        }
        return response;
    }
}

