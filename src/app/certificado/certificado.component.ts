import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {
  numDocument = localStorage['numDocument'];
  name = localStorage['name'];
  constructor() { }

  ngOnInit() {
  }
}
