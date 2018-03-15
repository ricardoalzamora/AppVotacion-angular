import { Component, OnInit, HostBinding } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { RouterLink, Router } from '@angular/router';
import {} from '../jurado-view/jurado-view.component'

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.css']
})
export class JuradoComponent implements OnInit {

  constructor(private todoService: TodoService, private _router: Router) { }

  ngOnInit() {
  }

  getAuthorizationJurado(){
    if((<HTMLInputElement>document.getElementById("checkbox")).checked && this.todoService.getAuthorizationJurado(
      (<HTMLInputElement>document.getElementById("numDocument")).value,
      (<HTMLInputElement>document.getElementById("password")).value
    )){
      this.todoService.dontBack();
      this._router.navigate(['/juradoview']);
    }else{
      this.todoService.showAlert();
    }    
  }

}
