import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';
import { TodoService } from './services/todo.service';
import { JuradoComponent } from './jurado/jurado.component';
import { JuradoViewComponent } from './jurado-view/jurado-view.component';

export const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  storageBucket: '',
  messagingSenderId: ''
}

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    JuradoComponent,
    JuradoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
