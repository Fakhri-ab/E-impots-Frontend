import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Reclamation} from '../../models/Reclamation';
import {InfoGenerale} from '../../models/info-generale';

@Injectable({
  providedIn: 'root'
})
export class InfogenraleService {

  url = environment.url
  constructor(private  httpclient: HttpClient) { }

  getallinfoGeneraleByUserId(id: number) {
    return this.httpclient.get<InfoGenerale>(this.url + 'getallinfoGeneraleByUserId/' + id)
  }
}
