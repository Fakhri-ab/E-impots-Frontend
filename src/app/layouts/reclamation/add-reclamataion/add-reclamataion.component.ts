import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Reclamation} from '../../../../shared/models/reclamation';
import {ActivatedRoute, Router} from '@angular/router';
import {ReclamationService} from '../../../../shared/service/reclamation/reclamation.service';
import {finalize} from 'rxjs/operators';
import {UserService} from '../../../../shared/service/user.service';

@Component({
  selector: 'app-add-reclamataion',
  templateUrl: './add-reclamataion.component.html',
  styleUrls: ['./add-reclamataion.component.css']
})
export class AddReclamataionComponent implements OnInit {

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
        .subscribe((res => this.router.navigateByUrl('/admin/reclamation/reclamation')));
    console.log('formvalueReclam', this.ReclamationForm.value)
  }




}
