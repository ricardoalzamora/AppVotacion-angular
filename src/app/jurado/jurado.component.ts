import { Component, OnInit } from '@angular/core';

import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-jurado',
  templateUrl: './jurado.component.html',
  styleUrls: ['./jurado.component.css']
})
export class JuradoComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

}
