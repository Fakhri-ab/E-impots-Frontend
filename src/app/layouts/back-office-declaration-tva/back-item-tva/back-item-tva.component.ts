import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TvaService} from '../../../../shared/service/TVA/tva.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-back-item-tva',
  templateUrl: './back-item-tva.component.html',
  styleUrls: ['./back-item-tva.component.css']
})
export class BackItemTvaComponent implements OnInit {
  id: any
  dec: any
  constructor(private router: Router, private router1: ActivatedRoute , private tvaService: TvaService) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tvaService.getDeclarationTVAByid(this.id).subscribe(cat => {this.dec = cat;
        console.log('TVAbyid' , cat)})
    })
  }

  gotoliste() {
    this.router.navigate(['admin/backofficedeclarationTVA/BackTvaListe'])
  }

  generatePDF() {
    this.tvaService.getDeclarationTVAByid(this.id).subscribe(dec => {
      // @ts-ignore
      // @ts-ignore
      const docDefinition = {
        content: [
          {
            text: 'Declaration taxe sur la valeur ajoutée',
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
                ['Nom et Prenom', 'Ventes Soumises TVA Normale '],
                [dec.fullName, dec.ventesSoumisesTVANormale]
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
                ['Ventes_Exonerees', 'Achats Aupres Fournisseurs Etrangers  '],
                [dec.ventesExonerees, dec.achatsAupresFournisseursEtrangers]
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
                ['Achats Aupres Fournisseurs Soumis TVANormale', 'Charges Deductibles   '],
                [dec.achatsAupresFournisseursSoumisTVANormale, dec.chargesDeductibles]
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
                ['Exportations', 'Tva Collectee '],
                [dec.exportations, dec.tvacollectee]
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
                ['Tva Deductible', 'Tva nette A Paye '],
                [dec.tvadeductible, dec.tvanetteAPaye]
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
            text: 'Portail E-impots ' + dec.dateOfDeclarationTVA,
            bold: true,
            fontSize: 15,
            alignment: 'center',
            margin: [0, 0, 0, 20],
            absolutePosition: { x: 450, y: 730 }
          }
        ]
      };

      pdfMake.createPdf(docDefinition).download(  dec.fullName + 'DeclarationTVA.pdf'  );
    });
  }


}
