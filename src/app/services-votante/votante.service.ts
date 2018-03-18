import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Votante } from '../models/votante'

@Injectable()
export class VotanteService {
  votanteList: AngularFireList<any>;
  selectVotante: Votante = new Votante();

  constructor(private firebase: AngularFireDatabase) { }

  getVotantes(){
    return this.votanteList = this.firebase.list('votantes');
  }

  insertVotante(votante: Votante){
    this, this.votanteList.push({
      document: votante.document,
      name: votante.name,
      firstlastname: votante.firstlastname,
      secondlastname: votante.secondlastname
    });
  }

  updateVotante(votante: Votante){
    this.votanteList.update(votante.$key, {
      document: votante.document,
      name: votante.name,
      firstlastname: votante.firstlastname,
      secondlastname: votante.secondlastname
    })
  }

  deleteVotante($key: string){
    this.votanteList.remove($key);
  }

}
