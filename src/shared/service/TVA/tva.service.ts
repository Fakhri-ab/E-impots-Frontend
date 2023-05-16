import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeclarationTva} from '../../models/declaration-tva';
import {DeclarationIRPP} from '../../models/declaration-irpp';

@Injectable({
  providedIn: 'root'
})
export class TvaService {
  url = environment.url
  constructor(private  httpclient: HttpClient) { }

  getallDeclarationTVA(o: any): Observable<DeclarationTva> {
    const params = new HttpParams()
        .set('page', o.page)
        .set('size', o.size)
        .set('recherche', o.recherche)
    return this.httpclient.get<DeclarationTva>(this.url + 'getallDeclarationTVA', {params})
  }

  // tslint:disable-next-line:no-shadowed-variable
  createDeclarationTVA(idu: any, DeclarationTva: any) {
    return this.httpclient.post( this.url + 'ajouterDeclarationTVA/' + idu, DeclarationTva);
  }

  getallDeclarationTVAbyUserId(id: any): Observable<DeclarationTva> {
    return this.httpclient.get<DeclarationTva>(this.url + 'getallDeclarationTVAbyUserid/' + id )
  }

  getDeclarationTVAByid(id) {
    return this.httpclient.get<DeclarationTva>(this.url + 'retrieve-DeclarationTVA/' + id)
  }

  deleteDeclarationTVA(id) {
    return this.httpclient.delete<DeclarationIRPP>(this.url + 'deleteDeclarationTVA/' + id)
  }
}
