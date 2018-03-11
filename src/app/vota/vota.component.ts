import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-vota',
  templateUrl: './vota.component.html',
  styleUrls: ['./vota.component.css']
})
export class VotaComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  addTodo(itemTitle){
    this.todoService.addTodo(itemTitle);
  }

}
