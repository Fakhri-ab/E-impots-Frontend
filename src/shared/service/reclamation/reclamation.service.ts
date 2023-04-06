import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reclamation} from '../../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  url = environment.url
  constructor(private  httpclient: HttpClient) { }

 // getallReclamations(): Observable<Reclamation> {
   // const params = new HttpParams()
       // .set('page', o.page)
       // .set('size', o.size)
      //  .set('recherche', o.recherche)
   // return this.httpclient.get<Reclamation>(this.url + '/retrieve-all-Reclamations')
 // }

  getallReclamations(o: any): Observable<Reclamation> {
     const params = new HttpParams()
     .set('page', o.page)
     .set('size', o.size)
     .set('recherche', o.recherche)
    return this.httpclient.get<Reclamation>(this.url + 'getalltReclamation', {params})
  }

  // tslint:disable-next-line:no-shadowed-variable
  createReclamation(idu: any, Reclamation: any) {
    return this.httpclient.post( this.url + 'add-Reclamation/' + idu, Reclamation);
  }

  getReclamationByid(id) {
    return this.httpclient.get<Reclamation>(this.url + 'retrieve-Reclamation/' + id)
  }

  // tslint:disable-next-line:no-shadowed-variable
  modifyReclamation(idu: any, idr: any , Reclamation: any) {
    // @ts-ignore
    return this.httpclient.put<Reclamation>(this.url + 'modify-Reclamation/' + idu + '/' + idr , Reclamation )
  }

  DeleteReclamation(id: any) {
    return this.httpclient.delete(this.url + 'remove-Reclamation/' + id);
  }
  generatePDF() {
    return this.httpclient.get<any>(this.url + 'downloadPdf')
  }

  getallReclamationsbyUserId(id: any): Observable<Reclamation> {
    return this.httpclient.get<Reclamation>(this.url + 'getAllReclamationsByUserId/' + id )
  }
}
