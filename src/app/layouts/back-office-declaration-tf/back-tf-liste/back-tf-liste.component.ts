import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {TFService} from '../../../../shared/service/TF/tf.service';
import {DeclarationTF} from '../../../../shared/models/declaration-tf';
import {UserService} from '../../../../shared/service/user.service';

@Component({
  selector: 'app-back-tf-liste',
  templateUrl: './back-tf-liste.component.html',
  styleUrls: ['./back-tf-liste.component.css']
})
export class BackTfListeComponent implements OnInit {

  alldecTF: any
  pageSize = 5
  page = 0
  collectionSize: number
  key = ''
  constructor(private tfserv:  TFService , private router: Router, private userService: UserService ) { }

  ngOnInit(): void {
    this.getalldeclarationsTF({ page: 0, size: 5, recherche: this.key }) ;
  }

  getalldeclarationsTF(request) {
    this.tfserv.getallDeclarationTF(request).subscribe(res => {
      // console.log('liste', res)
      this.alldecTF = res['content']
      //  console.log('les DeclarationsIRPP ', res);
      //  console.log(' les salaires ', this.alldecIRPP[0].salaires);
      console.log('les DeclarationsTF men all dec ', this.alldecTF);
      this.collectionSize = res['totalElements'];

    })
  }

  goToBackItemTF(id) {
    // @ts-ignore
    this.router.navigate(['/admin/backofficedeclarationTF/BackItemTF/', id]) ;

  }
  nextPage(event: any) {
    const request = {};
    request['page'] = event - 1
    request['size'] = this.pageSize
    request['recherche'] = this.key
    console.log(request)
    this.getalldeclarationsTF(request);
  }

  search(event) {
    this.key = event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page = 0
    request['recherche'] = this.key
    console.log(request)
    this.getalldeclarationsTF(request);

  }
  deletedeclrationTF(dec: DeclarationTF) {
    if (dec.situationFiscale === 'payee') {
      this.tfserv.deleteDeclarationTF(dec.id).subscribe(res => {console.log(res);
        this.router.navigate(['/admin/backofficedeclarationTF/BackTFListe']);
        // this.toastr.showNotification('top', 'right', 3, 'Categorie:', '', '...Categorie Supprimé....')
        this.getalldeclarationsTF({ page: 0, size: 5, recherche: this.key }) ;
      })
    } else { alert(' la declaration est non payee vous pouvez pas la supprimer') }

  }




}
