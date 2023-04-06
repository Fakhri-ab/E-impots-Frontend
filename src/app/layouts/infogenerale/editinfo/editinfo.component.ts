import { Component, OnInit } from '@angular/core';
import {InfogenraleService} from '../../../../shared/service/infogenerales/infogenrale.service';
import {ActivatedRoute, Router} from '@angular/router';
import {InfoGenerale} from '../../../../shared/models/info-generale';
import {UserService} from '../../../../shared/service/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.css']
})
export class EditinfoComponent implements OnInit {

  id: any;
  info: any;
  idinfo: any
  user: any

    infoForm = new FormGroup({
        nif: new FormControl(''),
        id: new FormControl(''),
        ville: new FormControl(''),
        nomRaisonsociale: new FormControl(''),
        adresseGeographique: new FormControl(''),
        adressePostale: new FormControl(''),
        telephone: new FormControl(''),
        email: new FormControl(''),
        activites: new FormControl(''),
    });
  constructor(private infogenraleService: InfogenraleService,
              private router: Router,
              private router1: ActivatedRoute,
              private userService: UserService
              ) { }

  ngOnInit(): void {
      this.getinfobyid();

  }

    getinfobyid() {
        this.userService.getuser().subscribe(res => {
            this.user = res
            // this.id = res.id
            console.log('userlelinfo', res)

            this.infogenraleService.getallinfoGeneraleByUserId(this.user.id).subscribe(response => {
                this.info = response ;
                this.idinfo = response.id ;
                console.log('your info from edit ', this.info)
            })
        })
    }

  updateInfo( ) {
    this.infogenraleService.updateinfo(1 , this.infoForm.value )
        .subscribe(data => {
          console.log('ena data', this.infoForm.value);
         // this.info = new InfoGenerale();
         // this.toastr.showNotification('top', 'right', 1, 'Categorie:', '', '...Categorie modifié....')
          this.gotoinfo();
        })
  }

  gotoinfo() {
    this.router.navigate(['/admin/infosGenerales/infosGenerales']);
  }

  submit(f) {
        this.updateInfo();
      console.log('ena data', this.infoForm);
  }

}
