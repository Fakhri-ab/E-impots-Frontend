import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Reclamation} from '../../models/Reclamation';
import {InfoGenerale} from '../../models/info-generale';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfogenraleService {

  url = environment.url
  constructor(private  httpclient: HttpClient) { }

  getallinfoGeneraleByUserId(id: number) {
    return this.httpclient.get<InfoGenerale>(this.url + 'getallinfoGeneraleByUserId/' + id)
  }

  // tslint:disable-next-line:no-shadowed-variable
  createinfo(idu: any, InfoGenerale: any) {
    return this.httpclient.post( this.url + 'ajouterInfo/' + idu, InfoGenerale);
  }

  getinfobyid(id): Observable<InfoGenerale> {
    // @ts-ignore
    return this.httpclient.get(this.url + `retrieve-info/` + id );
  }

  // tslint:disable-next-line:no-shadowed-variable
  updateinfo(id: any, InfoGenerale: any) {
    return this.httpclient.put( this.url + 'modifyinfogenerale/' + id, InfoGenerale);
  }


}
