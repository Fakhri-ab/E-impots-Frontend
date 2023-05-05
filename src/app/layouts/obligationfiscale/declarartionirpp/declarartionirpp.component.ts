import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IrppService} from '../../../../shared/service/IRPP/irpp.service';
import {FormControl, FormGroup} from '@angular/forms';
import {UserService} from '../../../../shared/service/user.service';

@Component({
  selector: 'app-declarartionirpp',
  templateUrl: './declarartionirpp.component.html',
  styleUrls: ['./declarartionirpp.component.css']
})
export class DeclarartionirppComponent implements OnInit {
  DeclarationIRppForm = new FormGroup({
    salaires: new FormControl(''),
    revenuesFonciers: new FormControl(''),
    revenusCapitauxMobiliers: new FormControl(''),
    beneficesIndustrielsCommerciaux: new FormControl(''),
    fullName: new FormControl(''),
    beneficesNnonCommerciaux: new FormControl(''),
    pcvmi: new FormControl(''),
    montanpayer: new FormControl(''),
    dateOfDeclarationIRPP: new FormControl(''),

  });

  private x: any;
  constructor(private router: Router, private irrpserv: IrppService, private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getuser().subscribe(
        user => this.x = user )
  }

  addAndCalculIRPP() {
    if (this.DeclarationIRppForm.valid) {
      this.DeclarationIRppForm.value.dateOfDeclarationIRPP = new Date();
      this.DeclarationIRppForm.value.montanpayer = this.gettauxetmantantApayer() ;
      console.log('form value ', this.DeclarationIRppForm.value)
      this.irrpserv.createDeclarationIRPP(this.x.id, this.DeclarationIRppForm.value).subscribe() ;
    }
    this.router.navigateByUrl('/admin/MesDeclarationIRPP/liste') ;
  }

  gettauxetmantantApayer() {
    console.log('form value ', this.DeclarationIRppForm.value)
    if (this.getsommerevenues() <= 50000) {
      console.log(this.getsommerevenues() * 0.05)
     return this.getsommerevenues() * 0.05
    } else if (this.getsommerevenues() > 50000 && this.getsommerevenues() <= 100000) {
      return this.getsommerevenues() * 0.1
    } else if (this.getsommerevenues() > 100000 && this.getsommerevenues() <= 500000) {
      return this.getsommerevenues() * 0.13
    } else if (this.getsommerevenues() > 500000 && this.getsommerevenues() <= 1000000) {
      return this.getsommerevenues() * 0.15
    } else if (this.getsommerevenues() > 1000000 && this.getsommerevenues() <= 5000000) {
      return this.getsommerevenues() * 0.17
    } else if (this.getsommerevenues() > 5000000) {
      return this.getsommerevenues() * 0.2
    }

  }

  getsommerevenues() {
     console.log('form dec ', typeof this.DeclarationIRppForm.value.salaires) ;
   return    (+this.DeclarationIRppForm.value.salaires) +  (+this.DeclarationIRppForm.value.revenuesFonciers) +
         // tslint:disable-next-line:max-line-length
         (+this.DeclarationIRppForm.value.revenusCapitauxMobiliers)   + (+this.DeclarationIRppForm.value.beneficesIndustrielsCommerciaux)  +
         (+this.DeclarationIRppForm.value.beneficesNnonCommerciaux)   + (+this.DeclarationIRppForm.value.pcvmi)   ;
   // console.log(' somme% ', som * 0.2) ;


  }


}
