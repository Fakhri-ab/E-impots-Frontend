import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import {DemandeInscriptionComponent} from './demande-inscription/demande-inscription.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'log',
    pathMatch: 'full',
   },
  {path: 'verify', component: VerifyEmailComponent},
  {path: 'log', component: LoginComponent},
  {path: 'forget', component: ForgetpasswordComponent},
  {path: 'reset', component: ResetpasswordComponent},
  {path: 'demande', component: DemandeInscriptionComponent}




];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
