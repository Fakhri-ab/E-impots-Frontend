import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {IrppService} from '../../../../shared/service/IRPP/irpp.service';
import {UserService} from '../../../../shared/service/user.service';
import {TvaService} from '../../../../shared/service/TVA/tva.service';

@Component({
  selector: 'app-maliste',
  templateUrl: './maliste.component.html',
  styleUrls: ['./maliste.component.css']
})
export class MalisteComponent implements OnInit {

  alldec: any
  x: any;
  constructor(private router: Router , private tvaService: TvaService   ,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getalldeclarationTVAbyiduser() ;
  }

  getalldeclarationTVAbyiduser() {
    this.userService.getuser().subscribe(res => {
      this.x = res
      // this.id = res.id
      console.log('userlelinfo', res)

      this.tvaService.getallDeclarationTVAbyUserId(this.x.id).subscribe(response => {
        this.alldec = response ;
        console.log('your declaration is ', this.alldec)
      })
    })
  }

  goToAdd() {
    this.router.navigateByUrl('/admin/obligationfiscale') ;
  }

  goToItemTVA(id) {
    // @ts-ignore
    this.router.navigate(['/admin/MesDeclarationTVA/itemTVA/', id]) ;

  }
}
