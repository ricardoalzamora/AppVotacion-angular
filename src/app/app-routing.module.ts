import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VotaComponent } from './vota/vota.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { CertificadoComponent } from './certificado/certificado.component';

const routes: Routes = [
  {path: 'singin', component: SingInComponent},
  {path: 'vota', component: VotaComponent},
  {path: 'certificado', component: CertificadoComponent},
  {path: '', component: SingInComponent},
  {path: '**', component: SingInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CertificadoComponent, SingInComponent, VotaComponent]
