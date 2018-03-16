import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-vota',
  templateUrl: './vota.component.html',
  styleUrls: ['./vota.component.css']
})
export class VotaComponent implements OnInit {

  constructor(private todoService: TodoService, private _router: Router) { }

  ngOnInit() {
  }

  exit(){
    document.getElementById("navbarId").style.visibility = "visible";
    this._router.navigate(['/']);
  }

  addTodo(itemTitle){
    this.todoService.addTodo(itemTitle);
  }

}
