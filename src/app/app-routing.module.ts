import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {ContentListaUczniowComponent} from "./content-lista-uczniow/content-lista-uczniow.component";
import {ContentFormularzComponent} from "./content-formularz/content-formularz.component";


const routes: Routes = [
  {path: "",redirectTo: "home", pathMatch: "full"},
  {path: "home", component: ContentComponent},
  {path: "lista_uczniow", component: ContentListaUczniowComponent},
  {path: "formularz", component: ContentFormularzComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
