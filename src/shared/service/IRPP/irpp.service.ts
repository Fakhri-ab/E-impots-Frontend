import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeclarationIRPP} from '../../models/declaration-irpp';
import {Reclamation} from '../../models/Reclamation';


@Injectable({
  providedIn: 'root'
})
export class IrppService {

  url = environment.url
  constructor(private  httpclient: HttpClient) { }


  getallDeclarationIRPP(o: any): Observable<DeclarationIRPP> {
    const params = new HttpParams()
        .set('page', o.page)
        .set('size', o.size)
        .set('recherche', o.recherche)
    return this.httpclient.get<DeclarationIRPP>(this.url + 'getallDeclarationIRPP', {params})
  }
  // tslint:disable-next-line:no-shadowed-variable
  createDeclarationIRPP(idu: any, DeclarationIRPP: any) {
    return this.httpclient.post( this.url + 'ajouterDeclarationIRPP/' + idu, DeclarationIRPP);
  }

  getallDeclarationIRPPbyUserId(id: any): Observable<DeclarationIRPP> {
    return this.httpclient.get<DeclarationIRPP>(this.url + 'getallDeclarationIRPPbyUserid/' + id )
  }

  getDeclarationIRPPByid(id) {
    return this.httpclient.get<DeclarationIRPP>(this.url + 'retrieve-DeclarationIRPP/' + id)
  }
}
