import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../shared/service/user.service';
import {Router} from '@angular/router';
import {IrppService} from '../../../../shared/service/IRPP/irpp.service';
import {DeclarationTF} from '../../../../shared/models/declaration-tf';
import {DeclarationIRPP} from '../../../../shared/models/declaration-irpp';

@Component({
  selector: 'app-liste-declaration-irpp',
  templateUrl: './liste-declaration-irpp.component.html',
  styleUrls: ['./liste-declaration-irpp.component.css']
})
export class ListeDeclarationIRPPComponent implements OnInit {

  alldecIRPP: any
  pageSize = 5
  page = 0
  collectionSize: number
  key = ''

  constructor(private userService: UserService, private irppService: IrppService , private router: Router) { }

  ngOnInit(): void {
    this.getalldeclarationsIRPP({ page: 0, size: 5, recherche: this.key }) ;
  }

  getalldeclarationsIRPP(request) {
    this.irppService.getallDeclarationIRPP(request).subscribe(res => {
     // console.log('liste', res)
      this.alldecIRPP = res['content']
    //  console.log('les DeclarationsIRPP ', res);
    //  console.log(' les salaires ', this.alldecIRPP[0].salaires);
      console.log('les DeclarationsIRPP men all dec ', this.alldecIRPP);
      this.collectionSize = res['totalElements'];

    })
  }

  goToBackItemIrpp(id) {
    // @ts-ignore
    this.router.navigate(['/admin/backofficedeclarationIRPP/BackItemIrpp/', id]) ;

  }

  deletedeclrationIRPP(dec: DeclarationIRPP) {
    if (dec.situationFiscale === 'payee') {
      this.irppService.deleteDeclarationIRPP(dec.id).subscribe(res => {console.log(res);
        this.router.navigate(['/admin/backofficedeclarationIRPP/liste']);
        // this.toastr.showNotification('top', 'right', 3, 'Categorie:', '', '...Categorie Supprimé....')
        this.getalldeclarationsIRPP({ page: 0, size: 5, recherche: this.key }) ;
      })
    } else { alert(' la declaration est non payee vous pouvez pas la supprimer') }

  }

  nextPage(event: any) {
    const request = {};
    request['page'] = event - 1
    request['size'] = this.pageSize
    request['recherche'] = this.key
    console.log(request)
    this.getalldeclarationsIRPP(request);
  }

  search(event) {
    this.key = event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page = 0
    request['recherche'] = this.key
    console.log(request)
    this.getalldeclarationsIRPP(request);

  }

}
