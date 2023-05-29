import { Component, OnInit } from '@angular/core';
import {loadStripe} from '@stripe/stripe-js';
import {environment} from '../../../../environments/environment';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {TFService} from '../../../../shared/service/TF/tf.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-item-tf',
  templateUrl: './item-tf.component.html',
  styleUrls: ['./item-tf.component.css']
})
export class ItemTFComponent implements OnInit {

  stripePromise = loadStripe(environment.stripe);
  url = environment.url
  id: any
  dec: any
  checkpay = true ;
  constructor(private router: Router, private router1: ActivatedRoute,  private http: HttpClient, private  tfserv: TFService) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }

  ngOnInit(): void {
    this.router1.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.tfserv.getDeclarationTFByid(this.id).subscribe(cat => {this.dec = cat;
        // tslint:disable-next-line:triple-equals
        if (this.dec.situationFiscale == 'Non payee') { this.checkpay = false
        }
        console.log('TFbyid' , cat)})
    })
  }

  async pay1(): Promise<void> {
    // here we create a payment object
    const payment = {
      name: 'Declaration TF',
      currency: 'usd',
      // amount on cents *10 => to be on dollar
      amount: parseFloat(this.dec.montantTaxeFonciere) * 100 ,
      quantity: '1',
      cancelUrl: 'http://localhost:4200/admin/payment/Cancel',
      successUrl: 'http://localhost:4200/admin/payment/Success',
      decId : this.id  ,
      typedec : 'TF' ,
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

  gotoliste() {
    this.router.navigate(['admin/MesDeclarationTF/liste'])
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
