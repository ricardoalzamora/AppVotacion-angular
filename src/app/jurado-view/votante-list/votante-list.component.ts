import { Component, OnInit } from '@angular/core';

import { VotanteService } from '../../services-votante/votante.service';
import { Votante } from '../../models/votante';
import { element } from 'protractor';

@Component({
  selector: 'app-votante-list',
  templateUrl: './votante-list.component.html',
  styleUrls: ['./votante-list.component.css']
})
export class VotanteListComponent implements OnInit {

  votanteList: Votante[];
  constructor(private votanteService: VotanteService) { }

  ngOnInit() {
    this.votanteService.getVotantes()
    .snapshotChanges()
    .subscribe(item =>{
      this.votanteList = [];
      item.forEach(element =>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.votanteList.push(x as Votante);
      })
    })
  }

  getVota(document) {
    var request = new XMLHttpRequest();
    request.open("GET", "../../assets/json/authorization.json", false);
    request.send(null);
    var my_JSON_object = JSON.parse(request.responseText);
    if (my_JSON_object[document][3] != "") {
      return true;
    }
    return false;
  }

  onEdit(votante: Votante){
    this.votanteService.selectVotante = Object.assign({}, votante);
  }

  onDelete($key: string){
    this.votanteService.deleteVotante($key);
  }

  verificarVotacion(votante: Votante){
    if(this.getVota(votante.document)){
      
    }else{
      
    }    
  }

}
