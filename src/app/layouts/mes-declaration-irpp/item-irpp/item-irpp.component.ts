import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IrppService} from '../../../../shared/service/IRPP/irpp.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import {HttpClient} from '@angular/common/http';
import {loadStripe} from '@stripe/stripe-js';
import {environment} from '../../../../environments/environment';

// @ts-ignore
// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-item-irpp',
  templateUrl: './item-irpp.component.html',
  styleUrls: ['./item-irpp.component.css']
})
export class ItemIRPPComponent implements OnInit {

  stripePromise = loadStripe(environment.stripe);
  url = environment.url
  id: any
  dec: any
  constructor(private router: Router, private router1: ActivatedRoute , private irrpserv: IrppService, private http: HttpClient) {
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

  async pay(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Declaration IRPP',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: parseFloat(this.dec.montanpayer) * 100 ,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/admin/payment/Cancel',
      successUrl: 'http://localhost:4200/admin/payment/Success',
    };

    const stripe = await this.stripePromise;

    // this is a normal http calls for a backend api
    this.http
        .post(`${this.url}payment`, payment)
        .subscribe((data: any) => {
          // I use stripe to redirect To Checkout page of Stripe platform
          stripe.redirectToCheckout({
            sessionId: data.id,
          });
        });
  }

  generatePDF() {
    this.irrpserv.getDeclarationIRPPByid(this.id).subscribe(dec => {
      // @ts-ignore
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
          },
          {
            text: 'Portail E-impots',
            bold: true,
            fontSize: 15,
            alignment: 'center',
            margin: [0, 0, 0, 20],
            absolutePosition: { x: 450, y: 730 }
          }
        ]
      };

      pdfMake.createPdf(docDefinition).download('DeclarationIRPP.pdf');
    });
  }





}
