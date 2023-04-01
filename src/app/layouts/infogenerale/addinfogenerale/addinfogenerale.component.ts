import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../../shared/service/user.service';
import {Router} from '@angular/router';
import {InfogenraleService} from '../../../../shared/service/infogenerales/infogenrale.service';

@Component({
  selector: 'app-addinfogenerale',
  templateUrl: './addinfogenerale.component.html',
  styleUrls: ['./addinfogenerale.component.css']
})
export class AddinfogeneraleComponent implements OnInit {

  infoForm = new FormGroup({
    nif: new FormControl(''),
    ville: new FormControl(''),
    nomRaisonsociale: new FormControl(''),
    adresseGeographique: new FormControl(''),
    adressePostale: new FormControl(''),
    telephone: new FormControl(''),
    email: new FormControl(''),
  });

  private x: any;
  constructor(private userService: UserService, private router: Router
              , private infogenraleService: InfogenraleService) { }

  ngOnInit(): void {
    this.userService.getuser().subscribe(
        user => this.x = user )
  }

  submit() {

    this.infogenraleService.createinfo( this.x.id, this.infoForm.value)
        .subscribe((res => this.router.navigateByUrl('/admin/infosGenerales/infosGenerales')));
    console.log('formvalueReclam', this.infoForm.value)
  }

}
