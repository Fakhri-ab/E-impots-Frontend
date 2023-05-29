import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/service/user.service';
import {Router} from '@angular/router';
import {TFService} from '../../../../shared/service/TF/tf.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-daclarationtf',
  templateUrl: './daclarationtf.component.html',
  styleUrls: ['./daclarationtf.component.css']
})
export class DaclarationtfComponent implements OnInit {

  DeclarationTFForm = new FormGroup({
    fullNameProprietaire: new FormControl(''),
    situationFiscale: new FormControl(''),
    montantTaxeFonciere: new FormControl(''),
    dateOfDeclarationTF: new FormControl(''),
    adresseBien: new FormControl(''),
    typeBien: new FormControl(''),
    valeurlocative: new FormControl(''),
    superficieBien: new FormControl(''),
  });

  private x: any;
  constructor(private router: Router, private tfser: TFService, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getuser().subscribe(
        user => this.x = user )
  }
  addAndCalcultaxeFonciere() {
    if (this.DeclarationTFForm.valid) {
      this.DeclarationTFForm.value.dateOfDeclarationTF = new Date();
      this.DeclarationTFForm.value.montantTaxeFonciere = this.calculTaxeFonciere() ;
      console.log('form value ', this.DeclarationTFForm.value)
      this.tfser.createDeclarationTF(this.x.id, this.DeclarationTFForm.value).subscribe() ;
    }
    this.router.navigateByUrl('/admin/MesDeclarationTF/liste') ;
  }

  calculTaxeFonciere() {
    return ((+this.DeclarationTFForm.value.valeurlocative) * 0.22 )
  }

}
