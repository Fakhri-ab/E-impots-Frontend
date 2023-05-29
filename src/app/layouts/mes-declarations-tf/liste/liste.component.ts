import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../../../../shared/service/user.service';
import {TFService} from '../../../../shared/service/TF/tf.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  alldec: any
  x: any;
  constructor(private router: Router , private userService: UserService , private tfserv: TFService ) { }

  ngOnInit(): void {
    this.getalldeclarationTFbyiduser() ;
  }

  getalldeclarationTFbyiduser() {
    this.userService.getuser().subscribe(res => {
      this.x = res
      // this.id = res.id
      console.log('userlelinfo', res)

      this.tfserv.getallDeclarationTFbyUserId(this.x.id).subscribe(response => {
        this.alldec = response ;
        console.log('your declaration Tf is ', this.alldec)
      })
    })
  }

  goToAdd() {
    this.router.navigateByUrl('/admin/obligationfiscale') ;
  }

  goToItemTF(id) {
    // @ts-ignore
    this.router.navigate(['/admin/MesDeclarationTF/itemTF/', id]) ;

  }

}
