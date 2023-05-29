import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../shared/service/user.service';
import {IrppService} from '../../../../shared/service/IRPP/irpp.service';
import {Reclamation} from '../../../../shared/models/Reclamation';
import {DeclarationIRPP} from '../../../../shared/models/declaration-irpp';
import {DeclarationTF} from '../../../../shared/models/declaration-tf';

@Component({
  selector: 'app-maliste',
  templateUrl: './maliste.component.html',
  styleUrls: ['./maliste.component.css']
})
export class MalisteComponent implements OnInit {

  alldec: any
  x: any;

  constructor(private router: Router , private irrpserv: IrppService  ,
              private userService: UserService) { }

  ngOnInit(): void {
    this.getalldeclarationIRPPbyiduser() ;
  }

  getalldeclarationIRPPbyiduser() {
    this.userService.getuser().subscribe(res => {
      this.x = res
      // this.id = res.id
      console.log('userlelinfo', res)

      this.irrpserv.getallDeclarationIRPPbyUserId(this.x.id).subscribe(response => {
        this.alldec = response ;
        console.log('your declaration is ', this.alldec)
      })
    })
  }

  goToAdd() {
    this.router.navigateByUrl('/admin/obligationfiscale') ;
  }

  goToItemIRPP(id) {
    // @ts-ignore
    this.router.navigate(['/admin/MesDeclarationIRPP/itemIRPP/', id]) ;

  }
  deletedeclrationIRPP(dec: DeclarationIRPP) {
    if (dec.situationFiscale === 'payee') {
      this.irrpserv.deleteDeclarationIRPP(dec.id).subscribe(res => {console.log(res);
        this.router.navigate(['/admin/MesDeclarationIRPP/liste']);
        this.getalldeclarationIRPPbyiduser()
      })
    } else { alert(' la declaration est non payee vous pouvez pas la supprimer') }

  }
}
