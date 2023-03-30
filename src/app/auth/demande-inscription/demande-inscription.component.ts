import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../../shared/service/user.service';
import {DemandeInscription} from '../../../shared/models/demande-inscription';

@Component({
  selector: 'app-demande-inscription',
  templateUrl: './demande-inscription.component.html',
  styleUrls: ['./demande-inscription.component.css']
})
export class DemandeInscriptionComponent implements OnInit {

  demandeForm = new FormGroup({
    userName: new FormControl('', Validators.required),
    userFName: new FormControl('', Validators.required),
    userLName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required && Validators.email),
    roleName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  constructor(private router: Router , private userService: UserService) { }

  ngOnInit(): void {
  }

  submit() {

    this.userService.addDemandeinscri( this.demandeForm.value)
        .subscribe((res => this.router.navigateByUrl('/auth/log')));
    console.log('formvalueDamande', this.demandeForm.value)
  }



}
