import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ReclamationService} from '../../../../shared/service/reclamation/reclamation.service';
import {UserService} from '../../../../shared/service/user.service';

@Component({
  selector: 'app-mes-reclamations',
  templateUrl: './mes-reclamations.component.html',
  styleUrls: ['./mes-reclamations.component.css']
})
export class MesReclamationsComponent implements OnInit {
  allReclam: any
  x: any;
  constructor(private router: Router , private reclamationService: ReclamationService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getreclambyiduser();
  }

  getreclambyiduser() {

    this.userService.getuser().subscribe(res => {
      this.x = res
      // this.id = res.id
      console.log('userlelinfo', res)

      this.reclamationService.getallReclamationsbyUserId(this.x.id).subscribe(response => {
        this.allReclam = response ;
        console.log('your reclam is ', this.allReclam)
      })
    })
  }

  goToAdd() {
    this.router.navigateByUrl('/admin/passerReclamation/passerReclamation') ;
  }

}
