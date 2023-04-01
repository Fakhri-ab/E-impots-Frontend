import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InfogenraleService} from '../../../../shared/service/infogenerales/infogenrale.service';
import {UserService} from '../../../../shared/service/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-detailinfo',
  templateUrl: './detailinfo.component.html',
  styleUrls: ['./detailinfo.component.css']
})
export class DetailinfoComponent implements OnInit {

  idu: any
  info: any
  user: any
  dhahra = false ;
  idinfo: any;

  constructor(private router: Router, private router1: ActivatedRoute, private infogeneraleservice: InfogenraleService,
              private userService: UserService) { }

  ngOnInit(): void {

    if (this.getinfobyid() == null ) {
        this.dhahra = true
    }
    this.getinfobyid();
  }

  getuser() {
    this.userService.getuser().subscribe(res => {
      this.user = res
      // this.id = res.id
      console.log('userlelinfo', res)
    })
  }

  getinfobyid() {
    this.userService.getuser().subscribe(res => {
      this.user = res
      // this.id = res.id
      console.log('userlelinfo', res)

      this.infogeneraleservice.getallinfoGeneraleByUserId(this.user.id).subscribe(response => {
        this.info = response ;
        console.log('your info is ', this.info)
      })
    })
  }

  gotoadd() {
    this.router.navigate(['admin/infosGenerales/add'])
  }

  gotoedit() {
    this.router.navigate(['admin/infosGenerales/edit'])
  }

}
