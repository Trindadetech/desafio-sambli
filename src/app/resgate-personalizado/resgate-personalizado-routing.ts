import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ResgatePersonalizadoComponent } from "./resgate-personalizado.component";


const routes: Routes = [
	{ path: '', component: ResgatePersonalizadoComponent },

]

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ResgateRoutingModule {

}