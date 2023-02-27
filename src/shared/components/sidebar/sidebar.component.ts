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
    { path: '/admin/dashboard', title: 'Dashboard',  icon: 'design_app', class: '', roleName: ['admin'] },
    // tslint:disable-next-line:max-line-length
  //  { path: '/admin/demande/alldemande', title: 'Mes demandes',  icon: 'users_single-02', class: '' , permissions: ['add_conge'], roleName: ['User'] },
    // tslint:disable-next-line:max-line-length
    { path: '/admin/user', title: 'users',  icon: 'users_single-02', class: '', roleName: ['admin'] },



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
