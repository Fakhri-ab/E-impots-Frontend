import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../shared/service/user.service';
import {TvaService} from '../../../../shared/service/TVA/tva.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-declarartiontva',
  templateUrl: './declarartiontva.component.html',
  styleUrls: ['./declarartiontva.component.css']
})
export class DeclarartiontvaComponent implements OnInit {

  DeclarationTvaForm = new FormGroup({
    fullName: new FormControl(''),
    achatsAupresFournisseursEtrangers: new FormControl(''),
    achatsAupresFournisseursSoumisTVANormale: new FormControl(''),
    chargesDeductibles: new FormControl(''),
    dateOfDeclarationTVA: new FormControl(''),
    exportations: new FormControl(''),
    tvacollectee: new FormControl(''),
    tvadeductible: new FormControl(''),
    tvanetteAPaye: new FormControl(''),
    ventesExonerees: new FormControl(''),
    ventesSoumisesTVANormale: new FormControl(''),

  });
  private x: any;
  constructor(private router: Router, private Tvaserv: TvaService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getuser().subscribe(
        user => this.x = user )
  }

  addAndCalculTVAnetteApaye() {
    if (this.calculTvaCollecte() < this.calculTvadeductible() ) {
        alert('votre TVA collecte est inferieur au Tva deductible')
      this.DeclarationTvaForm.value.dateOfDeclarationTVA = new Date();
      this.DeclarationTvaForm.value.tvacollectee = this.calculTvaCollecte();
      this.DeclarationTvaForm.value.tvadeductible = this.calculTvadeductible();
      this.DeclarationTvaForm.value.tvanetteAPaye = 0 ;
      console.log('form value ', this.DeclarationTvaForm.value)
      this.Tvaserv.createDeclarationTVA(this.x.id, this.DeclarationTvaForm.value).subscribe() ;
      this.router.navigateByUrl('/admin/MesDeclarationTVA/liste') ;

    } else if (this.DeclarationTvaForm.valid) {
      this.DeclarationTvaForm.value.dateOfDeclarationTVA = new Date();
      this.DeclarationTvaForm.value.tvacollectee = this.calculTvaCollecte();
      this.DeclarationTvaForm.value.tvadeductible = this.calculTvadeductible();
      this.DeclarationTvaForm.value.tvanetteAPaye = this.calculTvaCollecte() - this.calculTvadeductible() ;
      console.log('form value ', this.DeclarationTvaForm.value)
      this.Tvaserv.createDeclarationTVA(this.x.id, this.DeclarationTvaForm.value).subscribe() ;
    }
    this.router.navigateByUrl('/admin/MesDeclarationTVA/liste') ;

  }

  calculTvaCollecte() {
    // tslint:disable-next-line:no-unused-expression
   return  this.DeclarationTvaForm.value.ventesSoumisesTVANormale * 0.18
    // console.log(this.DeclarationTvaForm.value.ventesSoumisesTVANormale * 0.18) ;
  }

  calculTvadeductible () {
    // tslint:disable-next-line:no-unused-expression
    return ((+this.DeclarationTvaForm.value.achatsAupresFournisseursSoumisTVANormale) * 0.18 ) +
        ((+this.DeclarationTvaForm.value.chargesDeductibles) * 0.18 )
   // console.log('charge dede' , som)
  }

}
