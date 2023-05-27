import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DeclarationTF} from '../../models/declaration-tf';
import {DeclarationTva} from '../../models/declaration-tva';
import {DeclarationIRPP} from '../../models/declaration-irpp';

@Injectable({
  providedIn: 'root'
})
export class TFService {

  url = environment.url
  constructor(private  httpclient: HttpClient) { }

  getallDeclarationTF(o: any): Observable<DeclarationTF> {
    const params = new HttpParams()
        .set('page', o.page)
        .set('size', o.size)
        .set('recherche', o.recherche)
    return this.httpclient.get<DeclarationTF>(this.url + 'getallDeclarationTF', {params})
  }

  // tslint:disable-next-line:no-shadowed-variable
  createDeclarationTF(idu: any, DeclarationTF: any) {
    return this.httpclient.post( this.url + 'ajouterDeclarationTF/' + idu, DeclarationTF);
  }

  getallDeclarationTFbyUserId(id: any): Observable<DeclarationTF> {
    return this.httpclient.get<DeclarationTF>(this.url + 'getallDeclarationTFbyUserid/' + id )
  }

  getDeclarationTFByid(id) {
    return this.httpclient.get<DeclarationTF>(this.url + 'retrieve-DeclarationTF/' + id)
  }

  deleteDeclarationTF(id) {
    return this.httpclient.delete<DeclarationTF>(this.url + 'deleteDeclarationTF/' + id)
  }
}
