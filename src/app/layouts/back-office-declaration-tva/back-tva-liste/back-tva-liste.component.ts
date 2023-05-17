import { Component, OnInit } from '@angular/core';
import {TvaService} from '../../../../shared/service/TVA/tva.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-back-tva-liste',
  templateUrl: './back-tva-liste.component.html',
  styleUrls: ['./back-tva-liste.component.css']
})
export class BackTvaListeComponent implements OnInit {

  alldecTVA: any
  pageSize = 5
  page = 0
  collectionSize: number
  key = ''
  constructor(private tvaService: TvaService, private router: Router ) { }

  ngOnInit(): void {
    this.getalldeclarationsTva({ page: 0, size: 5, recherche: this.key }) ;
  }

  getalldeclarationsTva(request) {
    this.tvaService.getallDeclarationTVA(request).subscribe(res => {
      // console.log('liste', res)
      this.alldecTVA = res['content']
      //  console.log('les DeclarationsIRPP ', res);
      //  console.log(' les salaires ', this.alldecIRPP[0].salaires);
      console.log('les DeclarationsTVA men all dec ', this.alldecTVA);
      this.collectionSize = res['totalElements'];

    })
  }

  goToBackItemTVA(id) {
    // @ts-ignore
    this.router.navigate(['/admin/backofficedeclarationTVA/BackItemTva/', id]) ;

  }

  nextPage(event: any) {
    const request = {};
    request['page'] = event - 1
    request['size'] = this.pageSize
    request['recherche'] = this.key
    console.log(request)
    this.getalldeclarationsTva(request);
  }

  search(event) {
    this.key = event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page = 0
    request['recherche'] = this.key
    console.log(request)
    this.getalldeclarationsTva(request);

  }

}
