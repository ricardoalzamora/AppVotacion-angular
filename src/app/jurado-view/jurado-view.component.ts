import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jurado-view',
  templateUrl: './jurado-view.component.html',
  styleUrls: ['./jurado-view.component.css']
})
export class JuradoViewComponent implements OnInit {
  public votantes = this.getVotantes();
  constructor() {
   }

   getVotantes(){
    var request = new XMLHttpRequest();
    request.open("GET", "../assets/json/authorization.json", false);
    request.send(null);
    return JSON.parse(request.responseText);
   }

   addVotantes(){
    $.each( this.votantes, function( key, value) {
      $("ul").append("<li class='list-group-item'>" + key + ": " + value[0]+ " " + value[2] +  "</li>");
    });
   }

  ngOnInit() {
    this.addVotantes();
  }

}
