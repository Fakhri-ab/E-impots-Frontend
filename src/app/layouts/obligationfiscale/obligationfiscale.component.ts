import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-obligationfiscale',
  templateUrl: './obligationfiscale.component.html',
  styleUrls: ['./obligationfiscale.component.css']
})
export class ObligationfiscaleComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoIRPP() {
    this.router.navigate(['admin/obligationfiscale/declarationIRPP'])
  }

}
