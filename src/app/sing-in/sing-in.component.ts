import { Component, OnInit, HostBinding } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  constructor(private todoService: TodoService, private _router: Router) { }

  ngOnInit() {
  }

  getAuthorization(){
    this._router.navigate(['/vota']);
  }

}
