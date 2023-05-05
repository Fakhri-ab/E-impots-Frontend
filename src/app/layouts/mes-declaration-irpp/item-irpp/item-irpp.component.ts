import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IrppService} from '../../../../shared/service/IRPP/irpp.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-item-irpp',
  templateUrl: './item-irpp.component.html',
  styleUrls: ['./item-irpp.component.css']
})
export class ItemIRPPComponent implements OnInit {


  id: any
  dec: any
  constructor(private router: Router, private router1: ActivatedRoute , private irrpserv: IrppService) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.irrpserv.getDeclarationIRPPByid(this.id).subscribe(cat => {this.dec = cat;
        console.log('IRPPbyid' , cat)})
    })
  }

  gotoliste() {
    this.router.navigate(['admin/MesDeclarationIRPP/liste'])
  }

  generatePDF() {
    this.irrpserv.getDeclarationIRPPByid(this.id).subscribe(dec => {
      // @ts-ignore
      const docDefinition = {
        content: [
          {
            text: 'Déclaration d\'impôt sur le Revenu des Personnes Physiques',
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
                ['Nom et Prenom', 'salaires '],
                [dec.fullName, dec.salaires]
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
                ['Revenues Fonciers', 'Revenus Capitaux Mobiliers'],
                [dec.revenuesFonciers, dec.revenusCapitauxMobiliers]
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
                ['Benefices Industriels Commerciaux', 'Benefices Non Commerciaux'],
                [dec.beneficesIndustrielsCommerciaux, dec.beneficesNnonCommerciaux]
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
              widths: ['*'],
              body: [
                ['Plus-values sur cessions de valeurs mobilières ou immobilières'],
                [dec.pcvmi]
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
              widths: ['*'],
              body: [
                ['Montant à payer'],
                [dec.montanpayer]
              ]
            },
            tableHeader: {
              bold: true,
              fontSize: 13,
              color: 'black',
              fillColor: '#f2f2f2'
            }
          }
        ]
      };

      pdfMake.createPdf(docDefinition).download('DeclarationIRPP.pdf');
    });
  }





}
