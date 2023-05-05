import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ReclamationService} from '../../../../shared/service/reclamation/reclamation.service';
import {Reclamation} from '../../../../shared/models/Reclamation';

@Component({
  selector: 'app-frontdetail-reclamation',
  templateUrl: './frontdetail-reclamation.component.html',
  styleUrls: ['./frontdetail-reclamation.component.css']
})
export class FrontdetailReclamationComponent implements OnInit {
  id: any
  rec: Reclamation ;
  constructor( private router: Router, private router1: ActivatedRoute , private reclamationService: ReclamationService) { }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.reclamationService.getReclamationByid(this.id).subscribe(cat => {this.rec = cat;
        console.log('recbyid' , cat)})
    })
  }

}
