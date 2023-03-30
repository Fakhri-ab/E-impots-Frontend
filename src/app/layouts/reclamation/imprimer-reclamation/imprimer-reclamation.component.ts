import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {ReclamationService} from '../../../../shared/service/reclamation/reclamation.service';

@Component({
  selector: 'app-imprimer-reclamation',
  templateUrl: './imprimer-reclamation.component.html',
  styleUrls: ['./imprimer-reclamation.component.css']
})
export class ImprimerReclamationComponent implements OnInit {

  pdffile: any
  UserForm = new FormGroup({
    userFName: new FormControl(''),
    userLName: new FormControl(''),
    // DateOfReclam: new FormControl(''),
    // Status: new FormControl(''),
  });
  constructor(private router: Router , private reclamationService: ReclamationService) { }

  ngOnInit(): void {
  }

  pdf() {

      this.reclamationService.generatePDF().subscribe(res => {this.pdffile = res;
        console.log(res); })
     // this.router.navigate(['/trainings']);

}
}
