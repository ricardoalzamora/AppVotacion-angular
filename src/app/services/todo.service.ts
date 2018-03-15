import { Injectable } from '@angular/core';
import { parse } from 'url';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Injectable()
export class TodoService {

  constructor(private _router: Router) {

  }

  showAlert() {
    swal(
      'Error!',
      'Verifica los Datos',
      'error'
    )
  }

  showConfirm(name) {
    swal({
      title: 'Seguro',
      text: "Vatará por " + name,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Votar!'
    }).then((result) => {
      if (result.value) {
        this._router.navigate(['/certificado']);
        this.dontBack();
      }
    })
  }

  dontBack() {
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
      history.go(1);
    };
  }

  getName(code: string) {
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/candidates.json", false);
    request.send(null);
    var my_JSON_object = JSON.parse(request.responseText);
    return my_JSON_object[code];
  }

  addTodo(title: string) {
    this.showConfirm(this.getName(title));
  }

  getAuthorization(numDocument: any, addressEmail: any, password: any) {
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/authorization.json", false);
    request.send(null);
    var my_JSON_object = JSON.parse(request.responseText);
    if (my_JSON_object[numDocument][0] == addressEmail && my_JSON_object[numDocument][1] == password) {
      localStorage["numDocument"] = (<HTMLInputElement>document.getElementById("numDocument")).value;
      localStorage["name"] = my_JSON_object[numDocument][2];
      return true;
    }
    return false;
  }

  getAuthorizationJurado(numDocument: any, password: any) {
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/jurado.json", false);
    request.send(null);
    var my_JSON_object = JSON.parse(request.responseText);
    if (my_JSON_object[numDocument][0] == password) {
      return true;
    }
    return false;
  }

}
