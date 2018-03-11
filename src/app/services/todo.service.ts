import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { parse } from 'url';

@Injectable()
export class TodoService {

  todoList: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) {

  }

  getName(code: string) {
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/candidates.json", false);
    request.send(null)
    var my_JSON_object = JSON.parse(request.responseText);
    return my_JSON_object[code];
  }

  getTodoList() {
    this.todoList = this.firebasedb.list('titles');
  }

  addTodo(title: string) {
    alert("Votará: " + this.getName(title));
    this.todoList.push({
      title: title,
    })
  }

  getAuthorization(numDocument: number, addressEmail: string, password: string){
    alert("yes");
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/authorization.json", false);
    request.send(null)
    var my_JSON_object = JSON.parse(request.responseText);
    if(my_JSON_object[numDocument] != null && my_JSON_object[addressEmail] != null && my_JSON_object[password] != null){
      alert("yes");
    }
  }

}
