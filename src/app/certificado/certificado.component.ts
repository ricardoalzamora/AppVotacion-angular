import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-certificado',
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent implements OnInit {
  numDocument = localStorage['numDocument'];
  name = localStorage['name'];
  constructor(private _router: Router) { }

  ngOnInit() {
    
  }

  exit() {
    document.getElementById("navbarId").style.visibility = "visible";
    this._router.navigate(['/']);
  }
}
