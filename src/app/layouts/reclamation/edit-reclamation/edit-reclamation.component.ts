import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ReclamationService} from '../../../../shared/service/reclamation/reclamation.service';
import {UserService} from '../../../../shared/service/user.service';
import {Reclamation} from '../../../../shared/models/reclamation';

@Component({
  selector: 'app-edit-reclamation',
  templateUrl: './edit-reclamation.component.html',
  styleUrls: ['./edit-reclamation.component.css']
})
export class EditReclamationComponent implements OnInit {

  x: any
  idu: any
  idr: any
  rec: Reclamation

  ReclamationForm = new FormGroup({
    idReclamation: new FormControl(''),
    description: new FormControl(''),
    typeReclamation: new FormControl(''),
    dateOfReclam: new FormControl(''),
    Status: new FormControl(''),
  //  User: new FormControl('')
  });
  constructor(private router: Router, private router1: ActivatedRoute,
              private reclamationService: ReclamationService, private userService: UserService ) { }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.idu = paramMap.get('id');
      this.reclamationService.getReclamationByid(this.idu).subscribe(cat => {this.rec = cat;
        console.log('recbyid' , cat)})
    })
    this.userService.getuser().subscribe(user => this.x = user )
  }

  updateReclamation() {
    this.reclamationService.modifyReclamation(this.x.id, this.rec.idReclamation, this.ReclamationForm.value)
        .subscribe(data => {
          console.log(data);
          this.rec = new Reclamation();
          this.gotoList();
        }, error => console.log(error));
  }

  submit(f) {
    this.updateReclamation();
  }

  gotoList() {
    this.router.navigate(['admin/reclamation']);
  }

}
