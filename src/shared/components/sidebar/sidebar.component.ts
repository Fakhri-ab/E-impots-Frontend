import { Component, OnInit } from '@angular/core';
import {UserService} from '../../service/user.service';
import {userModel} from '../../models/User';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
   // permissions: string [];
    roleName: string [];

}
export const ROUTES: RouteInfo[] = [
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'design_app', class: '', roleName: ['User'] },
    // tslint:disable-next-line:max-line-length
  //  { path: '/admin/demande/alldemande', title: 'Mes demandes',  icon: 'users_single-02', class: '' , permissions: ['add_conge'], roleName: ['User'] },
    // tslint:disable-next-line:max-line-length
    { path: '/admin/user', title: 'users',  icon: 'users_single-02', class: '', roleName: ['admin'] },
    { path: '/admin/reclamation', title: 'reclamation',  icon: 'ui-2_settings-90', class: '', roleName: ['admin'] },
    { path: '/admin/demandes', title: 'Demandes inscription',  icon: 'users_circle-08', class: '', roleName: ['admin'] },
    { path: '/admin/infosGenerales', title: 'information-generale',  icon: 'users_single-02', class: '', roleName: ['User'] },
    { path: '/admin/passerReclamation', title: 'passer-reclamation',  icon: 'ui-2_settings-90', class: '', roleName: ['User'] },
    { path: '/admin/obligationfiscale', title: 'Mes obligations fiscales',  icon: 'business_badge', class: '', roleName: ['User'] },
    // tslint:disable-next-line:max-line-length
    { path: '/admin/backofficedeclarationIRPP', title: 'gérer declarations',  icon: 'business_briefcase-24', class: '', roleName: ['admin'] },
    { path: '/admin/MesDeclarationIRPP', title: 'Mes declarations irpp ',  icon: 'business_briefcase-24', class: '', roleName: ['User'] },
    { path: '/admin/MesDeclarationTVA', title: 'Mes declarations tva ',  icon: 'business_briefcase-24', class: '', roleName: ['User'] },
  //  { path: '/admin/payment', title: 'payment ',  icon: 'business_money-coins', class: '', roleName: ['User'] },



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
    menuItems: any[] = [];
    user: userModel = new userModel()

    constructor(public userService: UserService) {
   }

 ngOnInit() {
     this.userService.getuser().subscribe(
         (user) => {  console.log('path', user)
             ROUTES.forEach(menuItem => {
                 user.role.forEach(element => {
                     console.log('element', element)
                     if (menuItem.roleName.includes(element.roleName)) {
                         this.menuItems.push(menuItem)
                         console.log(this.menuItems, 'aaaaa');
                     }

                 })})


         }, error => console.log(error));
}

// console.log(this.menuItems)



  isMobileMenu() {
      if ( window.innerWidth > 991) {
          return false;
      }
      return true;
  };

}
