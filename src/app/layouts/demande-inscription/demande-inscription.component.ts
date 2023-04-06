import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../shared/service/user.service';
import {Router} from '@angular/router';
import {DemandeInscription} from '../../../shared/models/demande-inscription';
import {myToastrService} from '../../../shared/service/toastr/toastr.service';

@Component({
  selector: 'app-demande-inscription',
  templateUrl: './demande-inscription.component.html',
  styleUrls: ['./demande-inscription.component.css']
})
export class DemandeInscriptionComponent implements OnInit {

  allDemandes: any
  pageSize = 5
  page = 0
  collectionSize: number
  key = ''
  constructor(private userService: UserService , private router: Router , private toastr: myToastrService ) { }

  ngOnInit(): void {
    this.getAllDemandess({ page: 0, size: 5, recherche: this.key }) ;
  }

  getAllDemandess(request) {
    this.userService.getallDemandes(request).subscribe(res => {
      console.log('liste', res)
      this.allDemandes = res['content']
      console.log('les demandes', res);
      this.collectionSize = res['totalElements'];

    })
  }

  deleteDemande(dem: DemandeInscription ) {
    this.userService.deleteDemande(dem.id).subscribe(res => {console.log(res);
      this.router.navigate(['/admin/demandes']);
      // this.toastr.showNotification('top', 'right', 3, 'Categorie:', '', '...Categorie Supprimé....')
      this.getAllDemandess({ page: 0, size: 5, recherche: this.key }) ;
    })
  }

  nextPage(event: any) {
    const request = {};
    request['page'] = event - 1
    request['size'] = this.pageSize
    request['recherche'] = this.key
    console.log(request)
    this.getAllDemandess(request);
  }

  search(event) {
    this.key = event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page = 0
    request['recherche'] = this.key
    console.log(request)
    this.getAllDemandess(request);

  }

}
