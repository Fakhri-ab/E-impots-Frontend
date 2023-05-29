import { Component, OnInit } from '@angular/core';
import {TvaService} from '../../../../shared/service/TVA/tva.service';
import {Router} from '@angular/router';
import {DeclarationTF} from '../../../../shared/models/declaration-tf';

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
  deletedeclrationTVA(dec: DeclarationTF) {
    if (dec.situationFiscale === 'payee') {
      this.tvaService.deleteDeclarationTVA(dec.id).subscribe(res => {console.log(res);
        this.router.navigate(['/admin/backofficedeclarationTVA/BackTvaListe']);
        // this.toastr.showNotification('top', 'right', 3, 'Categorie:', '', '...Categorie Supprimé....')
        this.getalldeclarationsTva({ page: 0, size: 5, recherche: this.key }) ;
      })
    } else { alert(' la declaration est non payee vous pouvez pas la supprimer') }

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
