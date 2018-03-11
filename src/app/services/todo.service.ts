import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TodoService {

  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { 
    
  }

  getTodoList(){
      this.todoList = this.firebasedb.list('titles');
  }

  addTodo(title: string){
    alert("");
    this.todoList.push({
      title: title,
    })
  }

}
