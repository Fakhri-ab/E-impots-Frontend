import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {ReclamationService} from '../../../shared/service/reclamation/reclamation.service';
import {Reclamation} from '../../../shared/models/Reclamation';
import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import * as _ from 'lodash';
@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.css']
})
export class ReclamationComponent implements OnInit {


  allReclam: any
  reclamByUser: any
  pageSize = 5
  page = 0
  collectionSize: number
  key = ''


  constructor(private router: Router , private reclamationService: ReclamationService) { }

  ngOnInit() {
    this.getAllReclamations({ page: 0, size: 5, recherche: this.key }) ;
  }


getAllReclamations(request) {
  this.reclamationService.getallReclamations(request).subscribe(res => {
    console.log('liste', res)
    this.allReclam = res['content']
    console.log('les reclamations', res);
    this.collectionSize = res['totalElements'];

  })
}

  goToAdd() {
    this.router.navigate(['admin/reclamation/add'])
  }


  goToReclamItem(id) {
    this.router.navigate(['admin/reclamation/detail', id])
  }
  goToEdit(id) {
    this.router.navigate(['admin/reclamation/edit', id])
  }

  deleteReclamation(rec: Reclamation) {
    this.reclamationService.DeleteReclamation(rec.idReclamation).subscribe(res => {console.log(res);
      this.router.navigate(['/admin/reclamation']);
  })
  }

  nextPage(event: any) {
    const request = {};
    request['page'] = event - 1
    request['size'] = this.pageSize
    request['recherche'] = this.key
    console.log(request)
    this.getAllReclamations(request);
  }

  search(event) {
    this.key = event
    const request = {};
    request['page'] = 0
    request['size'] = this.pageSize
    this.page = 0
    request['recherche'] = this.key
    console.log(request)
    this.getAllReclamations(request);

  }
}
