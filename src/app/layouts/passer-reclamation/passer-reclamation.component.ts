import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReclamationService} from '../../../shared/service/reclamation/reclamation.service';
import {UserService} from '../../../shared/service/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-passer-reclamation',
  templateUrl: './passer-reclamation.component.html',
  styleUrls: ['./passer-reclamation.component.css']
})
export class PasserReclamationComponent implements OnInit {
  // rec: Reclamation
  users: any
  ReclamationForm = new FormGroup({
    description: new FormControl(''),
    typeReclamation: new FormControl(''),
    // DateOfReclam: new FormControl(''),
    // Status: new FormControl(''),
  });
  private x: any;

  constructor(private router: Router , private reclamationService: ReclamationService, private userService: UserService,
              private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {

    // this.userService.getallusers2().subscribe(res => {this.users = res;
    // console.log('users', res)
    // })
    this.userService.getuser().subscribe(
        user => this.x = user )
    // this.userService.getuser().subscribe(
    //   (user) => {  console.log('path from addr', user)})
  }

  submit() {

    this.reclamationService.createReclamation( this.x.id, this.ReclamationForm.value)
        .subscribe((res => this.router.navigateByUrl('/admin/passerReclamation/mesReclamations')));
    console.log('formvalueReclam', this.ReclamationForm.value)
  }

  gotomesReclamations() {
    this.router.navigateByUrl('/admin/passerReclamation/mesReclamations') ;
  }



}
