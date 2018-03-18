import { Component, OnInit } from '@angular/core';

import { VotanteService } from '../../services-votante/votante.service'
import { NgForm } from '@angular/forms'
import { Votante } from '../../models/votante'

@Component({
  selector: 'app-votante',
  templateUrl: './votante.component.html',
  styleUrls: ['./votante.component.css']
})
export class VotanteComponent implements OnInit {

  constructor( private votanteService: VotanteService) { }

  ngOnInit() {
    this.votanteService.getVotantes();
    this.resetForm();
  }

  onSubmit(votanteForm: NgForm){
    if(votanteForm.value.$key == null){
      this.votanteService.insertVotante(votanteForm.value);
    }else{
      this.votanteService.updateVotante(votanteForm.value);
    }
    this.resetForm(votanteForm);
  }

  resetForm(votanteForm?: NgForm){
    if(votanteForm != null){
      votanteForm.reset();
      this.votanteService.selectVotante = new Votante();
    }
  }

}
