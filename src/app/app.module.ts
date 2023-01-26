import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { ContainerComponent } from './container/container.component';
import { ContentComponent } from './content/content.component';
import {AppRoutingModule} from "./app-routing.module";
import { ContentListaUczniowComponent } from './content-lista-uczniow/content-lista-uczniow.component';
import { ContentFormularzComponent } from './content-formularz/content-formularz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    ContainerComponent,
    ContentComponent,
    ContentListaUczniowComponent,
    ContentFormularzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
