import { Component, OnInit } from '@angular/core';
import {TFService} from '../../../../shared/service/TF/tf.service';
import {ActivatedRoute, Router} from '@angular/router';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-back-item-tf',
  templateUrl: './back-item-tf.component.html',
  styleUrls: ['./back-item-tf.component.css']
})
export class BackItemTfComponent implements OnInit {

  id: any
  dec: any
  constructor(private tfserv:  TFService , private router: Router, private router1: ActivatedRoute ) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tfserv.getDeclarationTFByid(this.id).subscribe(cat => {this.dec = cat;
        console.log('TVFbyid' , this.dec)})
    })
  }

  gotoliste() {
    this.router.navigate(['admin/backofficedeclarationTF/BackTFListe'])
  }

  generatePDF() {
    this.tfserv.getDeclarationTFByid(this.id).subscribe(dec => {
      // @ts-ignore
      // @ts-ignore
      const docDefinition = {
        content: [
          {
            text: 'Declaration taxe foncière',
            bold: true,
            fontSize: 20,
            alignment: 'center',
            margin: [0, 0, 0, 20]
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'],
              body: [
                ['Nom et Prenom', 'Adresse_du_bien  '],
                [dec.fullNameProprietaire, dec.adresseBien]
              ]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black',
              fillColor: '#f2f2f2'
            }
          },
          {
            text: '',
            bold: true,
            fontSize: 16,
            margin: [0, 10, 0, 0]
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'],
              body: [
                ['Type_de_bien ', 'Superficie_du_bien   '],
                [dec.typeBien, dec.superficieBien]
              ]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black',
              fillColor: '#f2f2f2'
            }
          },
          {
            text: '',
            bold: true,
            fontSize: 16,
            margin: [0, 10, 0, 0]
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'],
              body: [
                ['Montant_valeur_locative', 'date_Declaration_TF   '],
                [dec.montantTaxeFonciere, dec.dateOfDeclarationTF]
              ]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black',
              fillColor: '#f2f2f2'
            }
          },
          {
            text: '',
            bold: true,
            fontSize: 16,
            margin: [0, 10, 0, 0]
          },
          {
            table: {
              headerRows: 1,
              widths: ['*', '*'],
              body: [
                ['Situation_fiscale', 'Montant_taxe_foncière '],
                [dec.situationFiscale, dec.montantTaxeFonciere]
              ]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black',
              fillColor: '#f2f2f2'
            }
          },
          {
            text: '',
            bold: true,
            fontSize: 16,
            margin: [0, 10, 0, 0]
          },
          {
            text: 'Portail E-impots ' + dec.dateOfDeclarationTF,
            bold: true,
            fontSize: 15,
            alignment: 'center',
            margin: [0, 0, 0, 20],
            absolutePosition: { x: 450, y: 730 }
          }
        ]
      };

      pdfMake.createPdf(docDefinition).download(  dec.fullNameProprietaire + 'DeclarationTF.pdf'  );
    });
  }


}
