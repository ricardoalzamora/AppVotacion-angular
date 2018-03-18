import { Component, OnInit, HostBinding } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { RouterLink, Router } from '@angular/router';
import { VotaComponent } from '../vota/vota.component';
import * as $ from 'jquery';
//import swal from 'sweetalert2'
@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  
  constructor(private todoService: TodoService, private _router: Router) {
  }
  
  ngOnInit() {
  }

  getAuthorization(){
    if((<HTMLInputElement>document.getElementById("checkbox")).checked && this.todoService.getAuthorization(
      (<HTMLInputElement>document.getElementById("numDocument")).value,
      (<HTMLInputElement>document.getElementById("addressEmail")).value,
      (<HTMLInputElement>document.getElementById("password")).value
    )){
      this.todoService.dontBack();
      this._router.navigate(['/vota']);
    }else{
      this.todoService.showAlert();
    }    
  }
}