import { Component, OnInit } from '@angular/core';

import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-jurado-view',
  templateUrl: './jurado-view.component.html',
  styleUrls: ['./jurado-view.component.css']
})
export class JuradoViewComponent implements OnInit {
  public votantes = this.getVotantes();
  constructor(private _router: Router) {
  }

  getVotantes() {
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/authorization.json", false);
    request.send(null);
    return JSON.parse(request.responseText);
  }

  addVotantes() {
    $.each(this.votantes, function (key, value) {
      $("ul").append("<li class='list-group-item'>" + key + ": " + value[0] + " " + value[2] + "</li>");
    });
  }

  exit() {
    document.getElementById("navbarId").style.visibility = "visible";
    this._router.navigate(['/']);
  }

  ngOnInit() {
    this.addVotantes();  
  }

  

}
