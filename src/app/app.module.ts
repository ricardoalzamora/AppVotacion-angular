import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from '../environments/environment';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from  'angularfire2'

import { TodoService } from './services/todo.service';
import { JuradoComponent } from './jurado/jurado.component';
import { JuradoViewComponent } from './jurado-view/jurado-view.component';
import { VotanteListComponent } from './jurado-view/votante-list/votante-list.component';
import { VotanteComponent } from './jurado-view/votante/votante.component';

import {VotanteService} from './services-votante/votante.service';
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
    JuradoViewComponent,
    VotanteListComponent,
    VotanteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [
    TodoService,
    VotanteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
